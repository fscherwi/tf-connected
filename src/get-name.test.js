import test from 'ava';

const Tinkerforge = require('tinkerforge');
const getName = require('./get-name.js');

test('Mast Brick', t => {
	t.is(getName.name(13), Tinkerforge.BrickMaster.DEVICE_DISPLAY_NAME);
});
