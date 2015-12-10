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
          console.log('Error: UNKNOWN ERROR');
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
  console.log('Used HOST: ' + HOST);
  console.log('Used PORT: ' + PORT);
}
/* istanbul ignore next */
function tfget() {
  ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE,
    function(uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier) {
      console.log('NAME: ' + get_name.get(deviceIdentifier));
      console.log('UID : ' + uid);
      console.log(' ');
    });
}

function tfget_advanced() {
  ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE,
    function(uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier, enumerationType) {
      console.log('NAME: ' + get_name.get(deviceIdentifier));
      console.log('UID : ' + uid);
      console.log('Enumeration Type:  ' + enumerationType);
      if (enumerationType === Tinkerforge.IPConnection.ENUMERATION_TYPE_DISCONNECTED) {
        console.log('');
        return;
      }
      console.log('Connected UID:     ' + connectedUid);
      console.log('Position:          ' + position);
      console.log('Hardware Version:  ' + hardwareVersion);
      console.log('Firmware Version:  ' + firmwareVersion);
      console.log('Device Identifier: ' + deviceIdentifier);
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
function get(port, host) {
  PORT = port;
  HOST = host;
  tfinit();
  tfget();
  exit();
}

function get_advanced(port, host) {
  PORT = port;
  HOST = host;
  tfinit();
  tfget_advanced();
  exit();
}
exports.get = get;
exports.get_advanced = get_advanced;
