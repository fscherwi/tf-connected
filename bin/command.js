#!/usr/bin/env node

var program = require('commander');
var connected = require('../connected.js');

program
  .version(require('../package.json').version)
  .usage('[options]')
  .option('-a, --advanced', 'Shows advanced information')
  .option('-h, --host [host]', 'The HOST, default to "localhost"')
  .option('-p, --port [port]', 'The PORT, default to "4223"', parseInt)
  .parse(process.argv);
/* istanbul ignore next */
if (!program.args.length) {
  if (program.host === undefined) {
    program.host = 'localhost';
  }
  if (program.port === undefined) {
    program.port = 4223;
  }
  if (program.advanced) {
    connected.get(program.port, program.host, true);
  } else {
    connected.get(program.port, program.host, false);
  }
} else {
  program.help();
}
