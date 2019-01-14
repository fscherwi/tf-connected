#!/usr/bin/env node

const program = require('commander');
require('../src/connected.js')();

program
	.version(require('../package.json').version)
	.usage('[options]')
	.option('-a, --advanced', 'Shows advanced information')
	.option('-h, --host [host]', 'The HOST, default to "localhost"')
	.option('-p, --port [port]', 'The PORT, default to "4223"', parseInt)
	.parse(process.argv);

let host = 'localhost';
let port = 4223;

if (program.host) {
	host = 'localhost';
}

if (program.port) {
	port = 4223;
}

if (program.advanced) {
	getConnected(port, host, true);
} else {
	getConnected(port, host);
}
