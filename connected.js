var Tinkerforge = require('tinkerforge');

var ipcon;
var PORT;
var HOST;

console.log('');
/* istanbul ignore next */
function tfinit() {
  ipcon = new Tinkerforge.IPConnection();

  ipcon.connect(HOST, PORT,
    function(error) {
      console.log('\nError: ' + error + '\n');

      process.exit();
    }
  );

  ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
    function(connectReason) {
      ipcon.enumerate();
    }
  );

  console.log('Used HOST: ' + HOST);
  console.log('Used PORT: ' + PORT);
}
/* istanbul ignore next */
function tfget() {
  ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE,
    function(uid, connectedUid, position, hardwareVersion, firmwareVersion, deviceIdentifier, enumerationType) {

      switch (deviceIdentifier) {
        case Tinkerforge.BrickDC.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickDC.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickIMU.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickIMU.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickMaster.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickMaster.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickServo.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickServo.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickStepper.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickStepper.DEVICE_DISPLAY_NAME);
          break;
          // BRICKLET'S
        case Tinkerforge.BrickletAccelerometer.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletAccelerometer.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletAmbientLight.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletAmbientLight.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletAmbientLightV2.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletAmbientLightV2.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletAnalogIn.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletAnalogIn.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletAnalogInV2.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletAnalogInV2.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletAnalogOut.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletAnalogOut.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletAnalogOutV2.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletAnalogOutV2.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletBarometer.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletBarometer.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletColor.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletColor.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletCurrent12.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletCurrent12.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletCurrent25.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletCurrent25.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletDistanceIR.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletDistanceIR.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletDistanceUS.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletDistanceUS.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletDualButton.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletDualButton.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletDualRelay.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletDualRelay.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletDustDetector.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletDustDetector.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletGPS.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletGPS.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletHallEffect.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletHallEffect.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletHumidity.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletHumidity.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletIndustrialAnalogOut.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletIndustrialAnalogOut.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletIndustrialDigitalIn4.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletIndustrialDigitalIn4.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletIndustrialDigitalOut4.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletIndustrialDigitalOut4.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletIndustrialDual020mA.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletIndustrialDual020mA.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletIndustrialQuadRelay.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletIndustrialQuadRelay.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletIO16.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletIO16.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletIO4.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletIO4.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletJoystick.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletJoystick.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletLaserRangeFinder.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletLaserRangeFinder.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletLCD16x2.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletLCD16x2.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletLCD20x4.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletLCD20x4.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletLEDStrip.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletLEDStrip.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletLine.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletLine.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletLinearPoti.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletLinearPoti.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletLoadCell.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletLoadCell.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletMoisture.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletMoisture.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletMotionDetector.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletMotionDetector.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletMultiTouch.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletMultiTouch.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletNFCRFID.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletNFCRFID.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletPiezoBuzzer.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletPiezoBuzzer.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletPiezoSpeaker.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletPiezoSpeaker.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletPTC.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletPTC.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletRemoteSwitch.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletRemoteSwitch.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletRotaryEncoder.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletRotaryEncoder.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletRotaryPoti.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletRotaryPoti.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletRS232.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletRS232.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletSegmentDisplay4x7.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletSegmentDisplay4x7.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletSolidStateRelay.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletSolidStateRelay.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletSoundIntensity.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletSoundIntensity.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletTemperature.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletTemperature.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletTemperatureIR.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletTemperatureIR.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletTilt.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletTilt.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletVoltage.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletVoltage.DEVICE_DISPLAY_NAME);
          break;
        case Tinkerforge.BrickletVoltageCurrent.DEVICE_IDENTIFIER:
          console.log('NAME: ' + Tinkerforge.BrickletVoltageCurrent.DEVICE_DISPLAY_NAME);
          break;
        default:
          console.log('NAME: unknown');
          break;
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
}

function exit() {
  process.stdin.on('data',
    function(data) {
      ipcon.disconnect();
      process.exit(0);
    }
  );
}

function get(port, host) {
  PORT = port;
  HOST = host;
  tfinit();
  tfget();
  exit();
}

exports.get = get;
