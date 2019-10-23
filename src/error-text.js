const errors = [
	[11, 'ALREADY CONNECTED'],
	[12, 'NOT CONNECTED'],
	[13, 'CONNECT FAILED'],
	[21, 'INVALID FUNCTION ID'],
	[31, 'TIMEOUT'],
	[41, 'INVALID PARAMETER'],
	[42, 'FUNCTION NOT SUPPORTED']
];

/**
 * Get the error text
 *
 * @param {number} code error code
 * @returns {string} error text
 */
module.exports.errorText = code => {
	const error = errors.find(errors => errors[0] === code);
	return error ? error[1] : 'UNKNOWN';
};
