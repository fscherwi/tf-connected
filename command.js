#!/usr/bin/env node

var program = require('commander');

program
  .version('1.0.0')
  .usage('[options] <list/advanced>')
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

      process.exit();
    }
  );

  ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
    function(connectReason) {
      ipcon.enumerate();
    }
  );

  ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE,
    function(uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier) {

      // BRICK'S
      if (deviceIdentifier === Tinkerforge.BrickDC.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickDC.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickIMU.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickIMU.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickMaster.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickMaster.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickServo.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickServo.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickStepper.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickStepper.DEVICE_DISPLAY_NAME);
      }

      // BRICKLET'S
      else if (deviceIdentifier === Tinkerforge.BrickletAmbientLight.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletAmbientLight.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletAnalogIn.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletAnalogIn.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletAnalogOut.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletAnalogOut.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletBarometer.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletBarometer.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletColor.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletColor.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletCurrent12.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletCurrent12.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletCurrent25.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletCurrent25.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletDistanceIR.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletDistanceIR.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletDistanceUS.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletDistanceUS.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletDualButton.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletDualButton.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletDualRelay.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletDualRelay.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletGPS.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletGPS.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletHallEffect.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletHallEffect.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletHumidity.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletHumidity.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletIndustrialDigitalIn4.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletIndustrialDigitalIn4.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletIndustrialDigitalOut4.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletIndustrialDigitalOut4.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletIndustrialDual020mA.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletIndustrialDual020mA.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletIndustrialQuadRelay.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletIndustrialQuadRelay.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletIO16.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletIO16.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletIO4.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletIO4.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletJoystick.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletJoystick.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletLCD16x2.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletLCD16x2.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletLCD20x4.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletLCD20x4.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletLEDStrip.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletLEDStrip.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletLine.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletLine.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletLinearPoti.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletLinearPoti.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletMoisture.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletMoisture.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletMotionDetector.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletMotionDetector.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletMultiTouch.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletMultiTouch.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletNFCRFID.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletNFCRFID.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletPiezoBuzzer.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletPiezoBuzzer.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletPiezoSpeaker.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletPiezoSpeaker.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletPTC.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletPTC.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletRemoteSwitch.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletRemoteSwitch.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletRotaryEncoder.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletRotaryEncoder.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletRotaryPoti.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletRotaryPoti.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletSegmentDisplay4x7.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletSegmentDisplay4x7.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletSolidStateRelay.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletSolidStateRelay.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletSoundIntensity.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletSoundIntensity.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletTemperature.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletTemperature.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletTemperatureIR.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletTemperatureIR.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletTilt.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletTilt.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletVoltage.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletVoltage.DEVICE_DISPLAY_NAME);
      } else if (deviceIdentifier === Tinkerforge.BrickletVoltageCurrent.DEVICE_IDENTIFIER) {
        console.log('NAME: ' + Tinkerforge.BrickletVoltageCurrent.DEVICE_DISPLAY_NAME);
      } else {
        console.log('NAME: unknown');
      }

      console.log('UID : ' + uid);

      if (program.args === "advanced") {
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

}
