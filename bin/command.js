#!/usr/bin/env node

const program = require('commander');

program
	.version(require('../package.json').version)
	.usage('[options]')
	.option('-a, --advanced', 'Shows advanced information')
	.option('-h, --host [host]', 'The HOST, default to "localhost"')
	.option('-p, --port [port]', 'The PORT, default to "4223"', parseInt)
	.parse(process.argv);
/* istanbul ignore next */
if (program.args.length >= 1) {
	if (!program.host) {
		program.host = 'localhost';
	}

	if (!program.port) {
		program.port = 4223;
	}

	if (program.advanced) {
		require('../src/connected.js').get(program.port, program.host, true);
	} else {
		require('../src/connected.js').get(program.port, program.host);
	}
} else {
	program.help();
}
