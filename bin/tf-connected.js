#!/usr/bin/env node

const yargs = require('yargs');
const conncected = require('../src/connected');

const { argv } = yargs.options({
	advanced: { type: 'boolean', default: false, description: 'Show advanced informations' },
	table: { type: 'boolean', default: false, description: 'Show output as a table' },
	host: { type: 'string', default: 'localhost', description: 'The HOST' },
	port: { type: 'number', default: 4223, description: 'The PORT' }
});

if (argv.port < 0 || argv.port > 65536) {
	console.error('\nError: check your inserted PORT\n');
	process.exit(1);
}

conncected.list(argv.host, argv.port, argv.advanced, argv.table);
