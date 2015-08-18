#!/usr/bin/env node

var program = require('commander');

program
  .version(require('./package.json').version)
  .usage('[options] list')
  .option('-a, --advanced', 'Shows advanced information')
  .option('-h, --host [host]', 'The HOST, default to "localhost"')
  .option('-p, --port [port]', 'The PORT, default to "4223"', parseInt)
  .parse(process.argv);

if (!program.args.length) {
  program.help();
} else {
  var Tinkerforge = require('tinkerforge');

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

  console.log('Used HOST: ' + HOST);
  console.log('Used PORT: ' + PORT);

  console.log('');

  var ipcon = new Tinkerforge.IPConnection();

  ipcon.connect(HOST, PORT,
    function(error) {
      if (error === 11) {
        console.log('Error: ALREADY CONNECTED');
      } else if (error === 12) {
        console.log('Error: NOT CONNECTED');
      } else if (error === 13) {
        console.log('Error: CONNECT FAILED');
      } else if (error === 21) {
        console.log('Error: INVALID FUNCTION ID');
      } else if (error === 31) {
        console.log('Error: TIMEOUT');
      } else if (error === 41) {
        console.log('Error: INVALID PARAMETER');
      } else if (error === 42) {
        console.log('Error: FUNCTION NOT SUPPORTED');
      } else {
        console.log('Error: UNKNOWN ERROR');
      }

      process.exit(0);
    }
  );

  ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
    function(connectReason) {
      ipcon.enumerate();
    }
  );

  ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE,
    function(uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier, enumerationType) {

      // BRICK'S
      if (deviceIdentifier === Tinkerforge.BrickDC.DEVICE_IDENTIFIER) {
        console.log('NAME: Brick DC');
      } else if (deviceIdentifier === Tinkerforge.BrickIMU.DEVICE_IDENTIFIER) {
        console.log('NAME: Brick IMU');
      } else if (deviceIdentifier === Tinkerforge.BrickMaster.DEVICE_IDENTIFIER) {
        console.log('NAME: Brick Master');
      } else if (deviceIdentifier === Tinkerforge.BrickServo.DEVICE_IDENTIFIER) {
        console.log('NAME: Brick Servo');
      } else if (deviceIdentifier === Tinkerforge.BrickStepper.DEVICE_IDENTIFIER) {
        console.log('NAME: Brick Stepper');
      }

      // BRICKLET'S
      else if (deviceIdentifier === Tinkerforge.BrickletAccelerometer.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Accelerometer');
      } else if (deviceIdentifier === Tinkerforge.BrickletAmbientLight.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Ambient Light');
      } else if (deviceIdentifier === Tinkerforge.BrickletAmbientLightV2.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Ambient Light V2');
      } else if (deviceIdentifier === Tinkerforge.BrickletAnalogIn.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Analog In');
      } else if (deviceIdentifier === Tinkerforge.BrickletAnalogInV2.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Analog In V2');
      } else if (deviceIdentifier === Tinkerforge.BrickletAnalogOut.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Analog Out');
      } else if (deviceIdentifier === Tinkerforge.BrickletAnalogOutV2.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Analog Out V2');
      } else if (deviceIdentifier === Tinkerforge.BrickletBarometer.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Barometer');
      } else if (deviceIdentifier === Tinkerforge.BrickletColor.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Color');
      } else if (deviceIdentifier === Tinkerforge.BrickletCurrent12.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Current 12');
      } else if (deviceIdentifier === Tinkerforge.BrickletCurrent25.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Current 25');
      } else if (deviceIdentifier === Tinkerforge.BrickletDistanceIR.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Distance IR');
      } else if (deviceIdentifier === Tinkerforge.BrickletDistanceUS.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Distance US');
      } else if (deviceIdentifier === Tinkerforge.BrickletDualButton.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Dual Button');
      } else if (deviceIdentifier === Tinkerforge.BrickletDualRelay.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Dual Relay');
      } else if (deviceIdentifier === Tinkerforge.BrickletDustDetector.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Dust Detector');
      } else if (deviceIdentifier === Tinkerforge.BrickletGPS.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet GPS');
      } else if (deviceIdentifier === Tinkerforge.BrickletHallEffect.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Hall Effect');
      } else if (deviceIdentifier === Tinkerforge.BrickletHumidity.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Humidity');
      } else if (deviceIdentifier === Tinkerforge.BrickletIndustrialAnalogOut.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Industrial Analog Out');
      } else if (deviceIdentifier === Tinkerforge.BrickletIndustrialDigitalIn4.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Industrial Digital In 4');
      } else if (deviceIdentifier === Tinkerforge.BrickletIndustrialDigitalOut4.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Industrial Digital Out 4');
      } else if (deviceIdentifier === Tinkerforge.BrickletIndustrialDual020mA.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Industrial Dual 20mA');
      } else if (deviceIdentifier === Tinkerforge.BrickletIndustrialQuadRelay.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Industrial Quad Relay');
      } else if (deviceIdentifier === Tinkerforge.BrickletIO16.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet IO16');
      } else if (deviceIdentifier === Tinkerforge.BrickletIO4.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet IO4');
      } else if (deviceIdentifier === Tinkerforge.BrickletJoystick.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Joystick');
      } else if (deviceIdentifier === Tinkerforge.BrickletLaserRangeFinder.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Laser Range Finder');
      } else if (deviceIdentifier === Tinkerforge.BrickletLCD16x2.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet LCD16x2');
      } else if (deviceIdentifier === Tinkerforge.BrickletLCD20x4.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet LCD20x4');
      } else if (deviceIdentifier === Tinkerforge.BrickletLEDStrip.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet LED Strip');
      } else if (deviceIdentifier === Tinkerforge.BrickletLine.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Line');
      } else if (deviceIdentifier === Tinkerforge.BrickletLinearPoti.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Linear Poti');
      } else if (deviceIdentifier === Tinkerforge.BrickletLoadCell.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Load Cell');
      } else if (deviceIdentifier === Tinkerforge.BrickletMoisture.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Moisture');
      } else if (deviceIdentifier === Tinkerforge.BrickletMotionDetector.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Motion Detector');
      } else if (deviceIdentifier === Tinkerforge.BrickletMultiTouch.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Multi Touch');
      } else if (deviceIdentifier === Tinkerforge.BrickletNFCRFID.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet NFCRF ID');
      } else if (deviceIdentifier === Tinkerforge.BrickletPiezoBuzzer.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Piezo Buzzer');
      } else if (deviceIdentifier === Tinkerforge.BrickletPiezoSpeaker.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Piezo Speaker');
      } else if (deviceIdentifier === Tinkerforge.BrickletPTC.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet PTC');
      } else if (deviceIdentifier === Tinkerforge.BrickletRemoteSwitch.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Remote Switch');
      } else if (deviceIdentifier === Tinkerforge.BrickletRotaryEncoder.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Rotary Encoder');
      } else if (deviceIdentifier === Tinkerforge.BrickletRotaryPoti.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Rotary Poti');
      } else if (deviceIdentifier === Tinkerforge.BrickletRS232.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet RS 232');
      } else if (deviceIdentifier === Tinkerforge.BrickletSegmentDisplay4x7.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Segment Display 4x7');
      } else if (deviceIdentifier === Tinkerforge.BrickletSolidStateRelay.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Solid State Relay');
      } else if (deviceIdentifier === Tinkerforge.BrickletSoundIntensity.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Sound Intensity');
      } else if (deviceIdentifier === Tinkerforge.BrickletTemperature.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Temperature');
      } else if (deviceIdentifier === Tinkerforge.BrickletTemperatureIR.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Temperature IR');
      } else if (deviceIdentifier === Tinkerforge.BrickletTilt.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Tilt');
      } else if (deviceIdentifier === Tinkerforge.BrickletVoltage.DEVICE_IDENTIFIER) {
        console.log('NAME: Bricklet Voltage');
      } else if (deviceIdentifier === Tinkerforge.BrickletVoltageCurrent.DEVICE_IDENTIFIER) {
        console.log('NAME: .Bricklet Voltage Current');
      } else {
        console.log('NAME: unknown');
      }

      console.log('UID : ' + uid);

      if (program.advanced) {
        console.log('Enumeration Type:  ' + enumerationType);
        if (enumerationType === Tinkerforge.IPConnection.ENUMERATION_TYPE_DISCONNECTED) {
          console.log('');
          return;
        }
        console.log('Connected UID:     ' + connectedUid);
        console.log('Position:          ' + position);
        console.log('Hardware Version:  ' + hardwareVersion);
        console.log('Firmware Version:  ' + firmwareVersion);
        console.log('Device Identifier: ' + deviceIdentifier);
      }

      console.log(' ');
    });

  process.stdin.on('data',
    function(data) {
      ipcon.disconnect();
      process.exit(0);
    }
  );

}
