const test = require('ava');

const {BrickMaster, BrickRED, BrickletAccelerometerV2} = require('tinkerforge');
const {name} = require('./get-name');

test('Brick Master', t => {
	t.is(name(BrickMaster.DEVICE_IDENTIFIER), BrickMaster.DEVICE_DISPLAY_NAME);
});

test('Brick RED', t => {
	t.is(name(BrickRED.DEVICE_IDENTIFIER), BrickRED.DEVICE_DISPLAY_NAME);
});

test('Bricklet Accelerometer V2', t => {
	t.is(name(BrickletAccelerometerV2.DEVICE_IDENTIFIER), BrickletAccelerometerV2.DEVICE_DISPLAY_NAME);
});

test('unknown Brick/Bricklet name', t => {
	t.is(name(123321), 'unknown');
});
