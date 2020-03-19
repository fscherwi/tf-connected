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

if (!program.port || (program.port >= 0 && program.port < 65536)) {
	require('../src/connected').list(program.host, program.port, program.advanced, program.table);
} else {
	console.error('\nPlease check your inserted PORT\n');
	process.exit(1);
}
