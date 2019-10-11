const Tinkerforge = require('tinkerforge');
const {table} = require('table');
const replaceString = require('replace-string');
const {name} = require('./get-name.js');
const {errorText} = require('./error-text.js');

let connectedList = '';
const data = [];

/**
 * Initialize Tinkerforge Connection
 *
 * @param {string} host Tinkerforge connection HOST
 * @param {number} port Tinkerforge connection PORT
 * @returns {object} Tinkerforge IP Connection
 */
function tfinit(host, port) {
	console.log('\nUsed HOST: %s\nUsed PORT: %s\n', host, port);
	const ipcon = new Tinkerforge.IPConnection();
	ipcon.connect(host, port, error => {
		console.error('Error: %s\n', errorText(error));
		process.exit();
	});
	ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, () => {
		ipcon.enumerate();
	});
	return ipcon;
}

/**
 * Get Information from the connected Bricks/Bricklets
 *
 * @param {object} ipcon Tinkerforge IP Connection
 * @param {boolean} advanced Show advanced informations
 * @param {boolean} tableOutput Show as table
 */
function tfget(ipcon, advanced, tableOutput) {
	ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE, (uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier, enumerationType) => {
		if (tableOutput && advanced) {
			data.push([name(deviceIdentifier), uid, enumerationType, connectedUid, position, replaceString(hardwareVersion.toString(), ',', '.'), replaceString(firmwareVersion.toString(), ',', '.'), deviceIdentifier]);
		} else if (advanced) {
			connectedList = connectedList + 'NAME:              ' + name(deviceIdentifier) + '\n' +
				'UID:               ' + uid + '\n' +
				'Enumeration Type:  ' + enumerationType + '\n' +
				'Connected UID:     ' + connectedUid + '\n' +
				'Position:          ' + position + '\n' +
				'Hardware Version:  ' + replaceString(hardwareVersion.toString(), ',', '.') + '\n' +
				'Firmware Version:  ' + replaceString(firmwareVersion.toString(), ',', '.') + '\n' +
				'Device Identifier: ' + deviceIdentifier + '\n\n';
		} else if (tableOutput) {
			data.push([name(deviceIdentifier), uid]);
		} else {
			connectedList = connectedList + 'NAME: ' + name(deviceIdentifier) + '\n' +
				'UID:  ' + uid + '\n\n';
		}
	});
}

/**
 * @param {string} host Tinkerforge connection HOST
 * @param {number} port Tinkerforge connection PORT
 * @param {boolean} advanced Show advanced informations
 * @param {boolean} tableOutput Show as table
 */
function list(host = 'localhost', port = 4223, advanced = false, tableOutput = false) {
	const ipcon = tfinit(host, port);

	if (tableOutput && advanced) {
		data.push(['NAME', 'UID', 'Enumeration Type', 'Connected UID', 'Position', 'Hardware Version', 'Firmware Version', 'Device Identifier']);
	} else if (tableOutput) {
		data.push(['NAME', 'UID']);
	}

	tfget(ipcon, advanced, tableOutput);

	setTimeout(() => {
		ipcon.disconnect();
		if (tableOutput) {
			console.log(table(data));
		} else {
			console.log(connectedList);
		}
	}, 25);
}

module.exports.list = list;
