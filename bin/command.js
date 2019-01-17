#!/usr/bin/env node

const program = require('commander');
const getConnected = require('../src/connected.js');

program
	.version(require('../package.json').version)
	.usage('[options]')
	.option('-a, --advanced', 'Shows advanced information')
	.option('-t, --table', 'Show output as a table')
	.option('-h, --host [host]', 'The HOST, default to "localhost"')
	.option('-p, --port [port]', 'The PORT, default to "4223"', parseInt)
	.parse(process.argv);

let host = 'localhost';
let port = 4223;

if (program.host) {
	host = program.host;
}

if (program.port) {
	port = program.port;
}

getConnected.list(port, host, program.advanced, program.table);
