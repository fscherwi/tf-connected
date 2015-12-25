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
  if (program.host) {
    var HOST = program.host;
  } else {
    var HOST = "localhost";
  }
  if (program.port) {
    var PORT = program.port;
  } else {
    var PORT = 4223;
  }
  if (program.advanced) {
    connected.get(PORT, HOST, true);
  } else {
    connected.get(PORT, HOST, false);
  }
} else {
  program.help();
}
