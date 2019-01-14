import test from 'ava';

const Tinkerforge = require('tinkerforge');
require('./get-name.js')();

test('Mast Brick', t => {
	t.is(getName(13), Tinkerforge.BrickMaster.DEVICE_DISPLAY_NAME);
});
