import test from 'ava';

import {errorText} from './error-text';

test('Error Code 11', t => {
	t.is(errorText(11), 'ALREADY CONNECTED');
});

test('Error Code 12', t => {
	t.is(errorText(12), 'NOT CONNECTED');
});

test('Error Code 13', t => {
	t.is(errorText(13), 'CONNECT FAILED');
});

test('Error Code 21', t => {
	t.is(errorText(21), 'INVALID FUNCTION ID');
});

test('Error Code 31', t => {
	t.is(errorText(31), 'TIMEOUT');
});

test('Error Code 41', t => {
	t.is(errorText(41), 'INVALID PARAMETER');
});

test('Error Code 42', t => {
	t.is(errorText(42), 'FUNCTION NOT SUPPORTED');
});

test('Unknown Error Code', t => {
	t.is(errorText(123), 'UNKNOWN');
});
