#!/usr/bin/env node

var program = require('commander');
var connected = require('./connected.js');

program
  .version(require('./package.json').version)
  .usage('[options] list')
  .option('-a, --advanced', 'Shows advanced information')
  .option('-h, --host [host]', 'The HOST, default to "localhost"')
  .option('-p, --port [port]', 'The PORT, default to "4223"', parseInt)
  .parse(process.argv);

if (!program.args.length) {
  connected.get();
} else {
  program.help();
}
