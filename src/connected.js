const Tinkerforge = require('tinkerforge');
const { table } = require('table');
const replaceString = require('replace-string');
const { name } = require('./get-name.js');
const { errorText } = require('./error-text.js');

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
 * @returns {string} Information as String
 */
function tfgetList(ipcon, advanced) {
	return new Promise(resolve => {
		let connectedList = '';
		ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE, (uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier, enumerationType) => {
			if (advanced) {
				connectedList = connectedList + 'NAME:              ' + name(deviceIdentifier) + '\n' +
					'UID:               ' + uid + '\n' +
					'Enumeration Type:  ' + enumerationType + '\n' +
					'Connected UID:     ' + connectedUid + '\n' +
					'Position:          ' + position + '\n' +
					'Hardware Version:  ' + replaceString(hardwareVersion.toString(), ',', '.') + '\n' +
					'Firmware Version:  ' + replaceString(firmwareVersion.toString(), ',', '.') + '\n' +
					'Device Identifier: ' + deviceIdentifier + '\n\n';
			} else {
				connectedList = connectedList + 'NAME: ' + name(deviceIdentifier) + '\n' +
					'UID:  ' + uid + '\n\n';
			}
		});
		setTimeout(() => {
			resolve(connectedList);
		}, 100);
	});
}

/**
 * Get Information from the connected Bricks/Bricklets
 *
 * @param {object} ipcon Tinkerforge IP Connection
 * @param {boolean} advanced Show advanced informations
 * @returns {string[]} Information as Array
 */
function tfgetTable(ipcon, advanced) {
	const data = [];
	if (advanced) {
		data.push(['NAME', 'UID', 'Enumeration Type', 'Connected UID', 'Position', 'Hardware Version', 'Firmware Version', 'Device Identifier']);
		ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE, (uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier, enumerationType) => {
			data.push([name(deviceIdentifier), uid, enumerationType, connectedUid, position, replaceString(hardwareVersion.toString(), ',', '.'), replaceString(firmwareVersion.toString(), ',', '.'), deviceIdentifier]);
		});
	} else {
		data.push(['NAME', 'UID']);
		ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE, (uid, _connectedUid, _position, _hardwareVersion, _firmwareVersion, deviceIdentifier) => {
			data.push([name(deviceIdentifier), uid]);
		});
	}
	return data;
}

/**
 * @param {string} host Tinkerforge connection HOST
 * @param {number} port Tinkerforge connection PORT
 * @param {boolean} advanced Show advanced informations
 * @param {boolean} tableOutput Show as table
 */
function list(host = 'localhost', port = 4223, advanced = false, tableOutput = false) {
	const ipcon = tfinit(host, port);

	if (tableOutput) {
		const data = tfgetTable(ipcon, advanced);
		setTimeout(() => {
			ipcon.disconnect();
			console.log(table(data));
		}, 25);
	} else {
		tfgetList(ipcon, advanced).then((connectedList) => {
			ipcon.disconnect();
			console.log(connectedList);
		})
	}
}

module.exports.list = list;
