const { IPConnection } = require('tinkerforge');

const errors = [
	{ code: IPConnection.ERROR_ALREADY_CONNECTED, message: 'ALREADY CONNECTED' },
	{ code: IPConnection.ERROR_NOT_CONNECTED, message: 'NOT CONNECTED' },
	{ code: IPConnection.ERROR_CONNECT_FAILED, message: 'CONNECT FAILED' },
	{ code: IPConnection.ERROR_INVALID_FUNCTION_ID, message: 'INVALID FUNCTION ID' },
	{ code: IPConnection.ERROR_TIMEOUT, message: 'TIMEOUT' },
	{ code: IPConnection.ERROR_INVALID_PARAMETER, message: 'INVALID PARAMETER' },
	{ code: IPConnection.ERROR_FUNCTION_NOT_SUPPORTED, message: 'FUNCTION NOT SUPPORTED' }
];

/**
 * Get the error text
 * @param {number} code error code
 * @returns {string} error text
 */
module.exports.errorText = code => {
	const error = errors.find(errors => errors.code === code);
	return error ? error.message : 'UNKNOWN';
};
