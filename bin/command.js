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
  var HOST;
  var PORT;
  if (program.host) {
    HOST = program.host;
  } else {
    HOST = 'localhost';
  }
  if (program.port) {
    PORT = program.port;
  } else {
    PORT = 4223;
  }
  if (program.advanced) {
    connected.get(PORT, HOST, true);
  } else {
    connected.get(PORT, HOST, false);
  }
} else {
  program.help();
}
