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

const options = program.opts();

if (!options.port || (options.port >= 0 && options.port < 65536)) {
	require('../src/connected').list(options.host, options.port, options.advanced, options.table);
} else {
	console.error('\nPlease check your inserted PORT\n');
	process.exit(1);
}
