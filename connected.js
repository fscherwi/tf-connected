var Tinkerforge = require('tinkerforge');
var get_name = require('./get_name.js');
var ipcon;
var PORT;
var HOST;
console.log('');
/* istanbul ignore next */
function tfinit() {
  ipcon = new Tinkerforge.IPConnection();
  ipcon.connect(HOST, PORT,
    function(error) {
      switch (error) {
        case 11:
          console.log('Error: ALREADY CONNECTED');
          break;
        case 12:
          console.log('Error: NOT CONNECTED');
          break;
        case 13:
          console.log('Error: CONNECT FAILED');
          break;
        case 21:
          console.log('Error: INVALID FUNCTION ID');
          break;
        case 31:
          console.log('Error: TIMEOUT');
          break;
        case 41:
          console.log('Error: INVALID PARAMETER');
          break;
        case 42:
          console.log('Error: FUNCTION NOT SUPPORTED');
          break;
        default:
          console.log('Error: UNKNOWN');
          break;
      }
      process.exit();
    }
  );
  ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
    function(connectReason) {
      ipcon.enumerate();
    }
  );
  console.log('Used HOST: %s\nUsed PORT: %s\n', HOST, PORT);
}
/* istanbul ignore next */
function tfget(advanced) {
  ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE,
    function(uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier, enumerationType) {
      console.log('NAME: %s', get_name.get(deviceIdentifier));
      console.log('UID : %s', uid);
      if (advanced === true) {
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
function exit() {
  process.stdin.on('data',
    function(data) {
      ipcon.disconnect();
      process.exit(0);
    }
  );
}
/* istanbul ignore next */
function get(port, host, advanced) {
  PORT = port;
  HOST = host;
  tfinit();
  if (advanced === true) {
    tfget(advanced === true);
  } else {
    tfget(advanced === false);
  }
  exit();
}
exports.get = get;
