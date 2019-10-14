#!/usr/bin/env node

const program = require('commander');

program
	.version(require('../package.json').version)
	.usage('[options]')
	.option('-a, --advanced', 'Show advanced informations')
	.option('-t, --table', 'Show output as a table')
	.option('-h, --host [host]', 'The HOST, default to "localhost"')
	.option('-p, --port [port]', 'The PORT, default to "4223"')
	.parse(process.argv);

require('../src/connected.js').list(program.host, program.port, program.advanced, program.table);
