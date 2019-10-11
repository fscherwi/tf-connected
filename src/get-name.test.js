import test from 'ava';

const Tinkerforge = require('tinkerforge');
const {name} = require('./get-name.js');

test('Master Brick', t => {
	t.is(name(13), Tinkerforge.BrickMaster.DEVICE_DISPLAY_NAME);
});
