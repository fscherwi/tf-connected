const Tinkerforge = require('tinkerforge');

require('./get-name.js')();

let ipcon;
/* istanbul ignore next */
function errorOutput(code) {
	switch (code) {
		case 11:
			return 'ALREADY CONNECTED';
		case 12:
			return 'NOT CONNECTED';
		case 13:
			return 'CONNECT FAILED';
		case 21:
			return 'INVALID FUNCTION ID';
		case 31:
			return 'TIMEOUT';
		case 41:
			return 'INVALID PARAMETER';
		case 42:
			return 'FUNCTION NOT SUPPORTED';
		default:
			return 'UNKNOWN';
	}
}

/* istanbul ignore next */
function tfinit(HOST, PORT) {
	ipcon = new Tinkerforge.IPConnection();
	ipcon.connect(HOST, PORT,
		error => {
			console.log('Error: ' + errorOutput(error));
			process.exit(1);
		}
	);
	ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
		() => {
			ipcon.enumerate();
		}
	);
	console.log('\nUsed HOST: %s\nUsed PORT: %s\n', HOST, PORT);
}

/* istanbul ignore next */
function tfget(advanced) {
	ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE,
		(uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier, enumerationType) => {
			console.log('NAME: %s', getName(deviceIdentifier));
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
module.exports = function () {
	this.getConnected = function (port, host, advanced) {
		tfinit(host, port);
		if (advanced) {
			tfget(advanced = true);
		} else {
			tfget(advanced = false);
		}

		setTimeout(() => {
			ipcon.disconnect();
			console.log('Timeout');
			process.exit(1);
		}, 100);
	};
};
