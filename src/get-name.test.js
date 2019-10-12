import test from 'ava';

const Tinkerforge = require('tinkerforge');
const {name} = require('./get-name.js');

test('Brick Master', t => {
	t.is(name(13), Tinkerforge.BrickMaster.DEVICE_DISPLAY_NAME);
});

test('Brick RED', t => {
	t.is(name(17), Tinkerforge.BrickRED.DEVICE_DISPLAY_NAME);
});

test('Bricklet Accelerometer V2', t => {
	t.is(name(2130), Tinkerforge.BrickletAccelerometerV2.DEVICE_DISPLAY_NAME);
});

test('unknown Brick/Bricklet name', t => {
	t.is(name(123321), 'unknown');
});
