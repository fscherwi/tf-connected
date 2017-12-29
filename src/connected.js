var Tinkerforge = require('tinkerforge'),
  get_name = require('./get_name.js'),
  ipcon;
/* istanbul ignore next */
function tfinit(HOST, PORT) {
  ipcon = new Tinkerforge.IPConnection();
  ipcon.connect(HOST, PORT,
    function (error) {
      console.log(error_output(error));
      process.exit();
    }
  );
  ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
    function (connectReason) {
      ipcon.enumerate();
    }
  );
  console.log('\nUsed HOST: %s\nUsed PORT: %s\n', HOST, PORT);
}
/* istanbul ignore next */
function tfget(advanced) {
  ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE,
    function (uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier, enumerationType) {
      console.log('NAME: %s', get_name.get(deviceIdentifier));
      console.log('UID : %s', uid);
      if (advanced) {
        console.log('Enumeration Type:  %s', enumerationType);
        if (enumerationType === Tinkerforge.IPConnection.ENUMERATION_TYPE_DISCONNECTED) {
          console.log('');
          return;
        }
        console.log('Connected UID:     %s', connectedUid);
        console.log('Position:          %s', position);
        console.log('Hardware Version:  %s', hardwareVersion);
        console.log('Firmware Version:  %s', firmwareVersion);
        console.log('Device Identifier: %s', deviceIdentifier);
      }
      console.log(' ');
    });
}
/* istanbul ignore next */
function error_output(code) {
  switch (code) {
  case 11:
    return 'Error: ALREADY CONNECTED';
  case 12:
    return 'Error: NOT CONNECTED';
  case 13:
    return 'Error: CONNECT FAILED';
  case 21:
    return 'Error: INVALID FUNCTION ID';
  case 31:
    return 'Error: TIMEOUT';
  case 41:
    return 'Error: INVALID PARAMETER';
  case 42:
    return 'Error: FUNCTION NOT SUPPORTED';
  default:
    return 'Error: UNKNOWN';
  }
}

/* istanbul ignore next */
module.exports.get = function get(port, host, advanced) {
  tfinit(host, port);
  if (advanced) {
    tfget(advanced = true);
  } else {
    tfget(advanced = false);
  }
  setTimeout(function () {
    ipcon.disconnect();
    process.exit(0);
  }, 100);
};
