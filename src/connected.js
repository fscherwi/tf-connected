const Tinkerforge = require('tinkerforge');
const {table} = require('table');

const getName = require('./get-name.js');

let ipcon;
let name = '';
let connectedList = '';
const data = [];

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

function tfget(advanced, tableOutput) {
	ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE,
		(uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier, enumerationType) => {
			name = getName.name(deviceIdentifier);

			if (!advanced && tableOutput) {
				data.push([name, uid]);
			} else {
				connectedList = connectedList + 'NAME: ' + name + '\n';
				connectedList = connectedList + 'UID : ' + uid + '\n';
			}

			if (advanced) {
				if (tableOutput) {
					data.push([name, uid, enumerationType, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier]);
				} else {
					connectedList = connectedList + 'Enumeration Type: ' + enumerationType + '\n';
					connectedList = connectedList + 'Connected UID:     ' + connectedUid + '\n';
					connectedList = connectedList + 'Position:          ' + position + '\n';
					connectedList = connectedList + 'Hardware Version:  ' + hardwareVersion + '\n';
					connectedList = connectedList + 'Firmware Version:  ' + firmwareVersion + '\n';
					connectedList = connectedList + 'Device Identifier: ' + deviceIdentifier + '\n';
				}
			}

			connectedList += '\n';
		});
}

module.exports.list = function (host, port, advanced, tableOutput) {
	tfinit(host, port);

	if (tableOutput) {
		if (advanced) {
			data.push(['NAME', 'UID', 'Enumeration Type', 'Connected UID', 'Position', 'Hardware Version', 'Firmware Version', 'Device Identifier']);
		} else {
			data.push(['NAME', 'UID']);
		}
	}

	tfget(advanced, tableOutput);

	setTimeout(() => {
		ipcon.disconnect();
		if (tableOutput) {
			console.log(table(data));
		} else {
			console.log(connectedList);
		}
	}, 100);
};
