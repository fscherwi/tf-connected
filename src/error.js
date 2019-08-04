module.exports.error = code => {
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
};
