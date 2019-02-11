const Tinkerforge = require('tinkerforge');
const {table} = require('table');
const replaceString = require('replace-string');

const getName = require('./get-name.js');

let ipcon;
let connectedList = '';
const data = [];

function tfinit(HOST, PORT) {
	ipcon = new Tinkerforge.IPConnection();
	ipcon.connect(HOST, PORT,
		error => {
			console.error('Error: ' + require('./error.js').error(error));
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
			if (tableOutput && advanced) {
				data.push([getName.name(deviceIdentifier), uid, enumerationType, connectedUid, position, replaceString(hardwareVersion.toString(), ',', '.'), replaceString(firmwareVersion.toString(), ',', '.'), deviceIdentifier]);
			} else if (advanced) {
				connectedList = connectedList + 'NAME:              ' + getName.name(deviceIdentifier) + '\n';
				connectedList = connectedList + 'UID:               ' + uid + '\n';
				connectedList = connectedList + 'Enumeration Type:  ' + enumerationType + '\n';
				connectedList = connectedList + 'Connected UID:     ' + connectedUid + '\n';
				connectedList = connectedList + 'Position:          ' + position + '\n';
				connectedList = connectedList + 'Hardware Version:  ' + replaceString(hardwareVersion.toString(), ',', '.') + '\n';
				connectedList = connectedList + 'Firmware Version:  ' + replaceString(firmwareVersion.toString(), ',', '.') + '\n';
				connectedList = connectedList + 'Device Identifier: ' + deviceIdentifier + '\n';
			} else if (tableOutput) {
				data.push([getName.name(deviceIdentifier), uid]);
			} else {
				connectedList = connectedList + 'NAME: ' + getName.name(deviceIdentifier) + '\n';
				connectedList = connectedList + 'UID:  ' + uid + '\n';
			}

			connectedList += '\n';
		});
}

module.exports.list = function (host, port, advanced, tableOutput) {
	tfinit(host, port);

	if (tableOutput && advanced) {
		data.push(['NAME', 'UID', 'Enumeration Type', 'Connected UID', 'Position', 'Hardware Version', 'Firmware Version', 'Device Identifier']);
	} else if (tableOutput) {
		data.push(['NAME', 'UID']);
	}

	tfget(advanced, tableOutput);

	setTimeout(() => {
		ipcon.disconnect();
		if (tableOutput) {
			console.log(table(data));
		} else {
			console.log(connectedList);
		}
	}, 25);
};
