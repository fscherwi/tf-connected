const Tinkerforge = require('tinkerforge');
const {table} = require('table');
const replaceString = require('replace-string');
const {name} = require('./get-name.js');
const {errorText} = require('./error-text.js');

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
 * @returns {string} Informations as String
 */
function tfgetList(ipcon, advanced) {
	return new Promise(resolve => {
		let connectedList = '';
		ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE, (uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier, enumerationType) => {
			if (advanced) {
				connectedList += 'Name:              ' + name(deviceIdentifier) + '\n' +
					'UID:               ' + uid + '\n' +
					'Enumeration Type:  ' + enumerationType + '\n' +
					'Connected UID:     ' + connectedUid + '\n' +
					'Position:          ' + position + '\n' +
					'Hardware Version:  ' + replaceString(hardwareVersion.toString(), ',', '.') + '\n' +
					'Firmware Version:  ' + replaceString(firmwareVersion.toString(), ',', '.') + '\n' +
					'Device Identifier: ' + deviceIdentifier + '\n\n';
			} else {
				connectedList += 'Name: ' + name(deviceIdentifier) + '\n' +
					'UID:  ' + uid + '\n\n';
			}
		});
		setTimeout(() => resolve(connectedList), 100);
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
	return new Promise(resolve => {
		const data = [];
		if (advanced) {
			data.push(['Name', 'UID', 'Enumeration Type', 'Connected UID', 'Position', 'Hardware Version', 'Firmware Version', 'Device Identifier']);
			ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE, (uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier, enumerationType) => {
				data.push([name(deviceIdentifier), uid, enumerationType, connectedUid, position, replaceString(hardwareVersion.toString(), ',', '.'), replaceString(firmwareVersion.toString(), ',', '.'), deviceIdentifier]);
			});
		} else {
			data.push(['Name', 'UID']);
			ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE, (uid, _connectedUid, _position, _hardwareVersion, _firmwareVersion, deviceIdentifier) => {
				data.push([name(deviceIdentifier), uid]);
			});
		}

		setTimeout(() => resolve(data), 25);
	});
}

/**
 * @param {string} host Tinkerforge connection HOST
 * @param {number} port Tinkerforge connection PORT
 * @param {boolean} advanced Show advanced informations
 * @param {boolean} tableOutput Show as table
 */
async function list(host = 'localhost', port = 4223, advanced = false, tableOutput = false) {
	if (port >= 0 && port < 65536) {
		const ipcon = tfinit(host, port);

		if (tableOutput) {
			const data = await tfgetTable(ipcon, advanced);
			ipcon.disconnect();
			console.log(table(data));
		} else {
			const connectedList = await tfgetList(ipcon, advanced);
			ipcon.disconnect();
			console.log(connectedList);
		}
	} else {
		console.error('\nPlease check your inserted PORT\n');
		process.exit(1);
	}
}

module.exports.list = list;
