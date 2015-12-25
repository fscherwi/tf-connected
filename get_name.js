var Tinkerforge = require('tinkerforge');
/* istanbul ignore next */
exports.get = function get(deviceIdentifier) {
  var names = [
    Tinkerforge.BrickDC.DEVICE_IDENTIFIER,
    Tinkerforge.BrickDC.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickIMU.DEVICE_IDENTIFIER,
    Tinkerforge.BrickIMU.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickMaster.DEVICE_IDENTIFIER,
    Tinkerforge.BrickMaster.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickServo.DEVICE_IDENTIFIER,
    Tinkerforge.BrickServo.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickStepper.DEVICE_IDENTIFIER,
    Tinkerforge.BrickStepper.DEVICE_DISPLAY_NAME,
    // BRICKLET'S
    Tinkerforge.BrickletAccelerometer.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletAccelerometer.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletAmbientLight.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletAmbientLight.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletAmbientLightV2.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletAmbientLightV2.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletAnalogIn.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletAnalogIn.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletAnalogInV2.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletAnalogInV2.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletAnalogOut.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletAnalogOut.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletAnalogOutV2.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletAnalogOutV2.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletBarometer.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletBarometer.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletColor.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletColor.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletCurrent12.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletCurrent12.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletCurrent25.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletCurrent25.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletDistanceIR.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletDistanceIR.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletDistanceUS.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletDistanceUS.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletDualButton.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletDualButton.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletDualRelay.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletDualRelay.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletDustDetector.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletDustDetector.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletGPS.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletGPS.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletHallEffect.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletHallEffect.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletHumidity.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletHumidity.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletIndustrialAnalogOut.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletIndustrialAnalogOut.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletIndustrialDigitalIn4.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletIndustrialDigitalIn4.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletIndustrialDigitalOut4.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletIndustrialDigitalOut4.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletIndustrialDual020mA.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletIndustrialDual020mA.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletIndustrialQuadRelay.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletIndustrialQuadRelay.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletIO16.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletIO16.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletIO4.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletIO4.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletJoystick.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletJoystick.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletLaserRangeFinder.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletLaserRangeFinder.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletLCD16x2.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletLCD16x2.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletLCD20x4.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletLCD20x4.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletLEDStrip.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletLEDStrip.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletLine.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletLine.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletLinearPoti.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletLinearPoti.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletLoadCell.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletLoadCell.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletMoisture.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletMoisture.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletMotionDetector.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletMotionDetector.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletMultiTouch.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletMultiTouch.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletNFCRFID.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletNFCRFID.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletPiezoBuzzer.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletPiezoBuzzer.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletPiezoSpeaker.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletPiezoSpeaker.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletPTC.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletPTC.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletRemoteSwitch.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletRemoteSwitch.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletRotaryEncoder.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletRotaryEncoder.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletRotaryPoti.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletRotaryPoti.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletRS232.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletRS232.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletSegmentDisplay4x7.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletSegmentDisplay4x7.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletSolidStateRelay.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletSolidStateRelay.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletSoundIntensity.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletSoundIntensity.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletTemperature.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletTemperature.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletTemperatureIR.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletTemperatureIR.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletTilt.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletTilt.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletVoltage.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletVoltage.DEVICE_DISPLAY_NAME,
    Tinkerforge.BrickletVoltageCurrent.DEVICE_IDENTIFIER,
    Tinkerforge.BrickletVoltageCurrent.DEVICE_DISPLAY_NAME
  ];
  var length = names.length;
  for (var i = 0; i < length; i=i+2) {
    if (deviceIdentifier === names[i]) {
      return names[i+1];
    }
  }
};
