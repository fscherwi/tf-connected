import test from 'ava';

const errorOutput = require('./error.js');

test('Error Code 11', t => {
	t.is(errorOutput.error(11), 'ALREADY CONNECTED');
});

test('Error Code 12', t => {
	t.is(errorOutput.error(12), 'NOT CONNECTED');
});

test('Error Code 13', t => {
	t.is(errorOutput.error(13), 'CONNECT FAILED');
});

test('Error Code 21', t => {
	t.is(errorOutput.error(21), 'INVALID FUNCTION ID');
});

test('Error Code 31', t => {
	t.is(errorOutput.error(31), 'TIMEOUT');
});

test('Error Code 41', t => {
	t.is(errorOutput.error(41), 'INVALID PARAMETER');
});

test('Error Code 42', t => {
	t.is(errorOutput.error(42), 'FUNCTION NOT SUPPORTED');
});

test('Unknown Error Code', t => {
	t.is(errorOutput.error(123), 'UNKNOWN');
});
