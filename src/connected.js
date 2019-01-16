const Tinkerforge = require('tinkerforge');
const Table = require('easy-table');

const getName = require('./get-name.js');

let ipcon;
const t = new Table();
const data = [];
let connectedList = '';

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

function tfget(advanced) {
	ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE,
		(uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier, enumerationType) => {
			connectedList = connectedList + 'NAME: ' + getName.name(deviceIdentifier) + '\n';
			connectedList = connectedList + 'UID : ' + uid + '\n';

			if (advanced) {
				connectedList = connectedList + 'Enumeration Type: ' + enumerationType + '\n';
				if (enumerationType === Tinkerforge.IPConnection.ENUMERATION_TYPE_DISCONNECTED) {
					console.log('');
					return;
				}

				connectedList = connectedList + 'Connected UID:     ' + connectedUid + '\n';
				connectedList = connectedList + 'Position:          ' + position + '\n';
				connectedList = connectedList + 'Hardware Version:  ' + hardwareVersion + '\n';
				connectedList = connectedList + 'Firmware Version:  ' + firmwareVersion + '\n';
				connectedList = connectedList + 'Device Identifier: ' + deviceIdentifier + '\n';

				data.push({name: getName.name(deviceIdentifier), uid, enumerationType, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier});
			} else {
				data.push({name: getName.name(deviceIdentifier), uid});
			}

			connectedList += '\n';
		});
}

module.exports.list = function (port, host, advanced, table) {
	tfinit(host, port);
	if (advanced) {
		tfget(true);
	} else {
		tfget(false);
	}

	setTimeout(() => {
		ipcon.disconnect();

		if (advanced) {
			data.forEach(table => {
				t.cell('NAME', table.name);
				t.cell('UID', table.uid);
				t.cell('Enumeration Type', table.enumerationType);
				t.cell('Connected UID', table.connectedUid);
				t.cell('Position', table.position);
				t.cell('Hardware Version', table.hardwareVersion);
				t.cell('Firmware Version', table.firmwareVersion);
				t.cell('Device Identifier', table.deviceIdentifier);
				t.newRow();
			});
		} else {
			data.forEach(table => {
				t.cell('NAME', table.name);
				t.cell('UID', table.uid);
				t.newRow();
			});
		}

		if (table) {
			console.log(t.toString());
		} else {
			console.log(connectedList);
		}
	}, 100);
};
