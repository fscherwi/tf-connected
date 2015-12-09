exports.get = function get (deviceIdentifier); {

  switch (deviceIdentifier) {
    case Tinkerforge.BrickDC.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickDC.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickIMU.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickIMU.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickMaster.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickMaster.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickServo.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickServo.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickStepper.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickStepper.DEVICE_DISPLAY_NAME);
      break;
      // BRICKLET'S
    case Tinkerforge.BrickletAccelerometer.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletAccelerometer.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletAmbientLight.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletAmbientLight.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletAmbientLightV2.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletAmbientLightV2.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletAnalogIn.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletAnalogIn.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletAnalogInV2.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletAnalogInV2.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletAnalogOut.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletAnalogOut.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletAnalogOutV2.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletAnalogOutV2.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletBarometer.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletBarometer.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletColor.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletColor.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletCurrent12.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletCurrent12.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletCurrent25.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletCurrent25.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletDistanceIR.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletDistanceIR.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletDistanceUS.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletDistanceUS.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletDualButton.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletDualButton.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletDualRelay.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletDualRelay.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletDustDetector.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletDustDetector.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletGPS.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletGPS.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletHallEffect.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletHallEffect.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletHumidity.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletHumidity.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletIndustrialAnalogOut.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletIndustrialAnalogOut.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletIndustrialDigitalIn4.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletIndustrialDigitalIn4.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletIndustrialDigitalOut4.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletIndustrialDigitalOut4.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletIndustrialDual020mA.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletIndustrialDual020mA.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletIndustrialQuadRelay.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletIndustrialQuadRelay.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletIO16.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletIO16.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletIO4.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletIO4.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletJoystick.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletJoystick.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletLaserRangeFinder.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletLaserRangeFinder.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletLCD16x2.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletLCD16x2.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletLCD20x4.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletLCD20x4.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletLEDStrip.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletLEDStrip.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletLine.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletLine.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletLinearPoti.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletLinearPoti.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletLoadCell.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletLoadCell.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletMoisture.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletMoisture.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletMotionDetector.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletMotionDetector.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletMultiTouch.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletMultiTouch.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletNFCRFID.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletNFCRFID.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletPiezoBuzzer.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletPiezoBuzzer.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletPiezoSpeaker.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletPiezoSpeaker.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletPTC.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletPTC.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletRemoteSwitch.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletRemoteSwitch.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletRotaryEncoder.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletRotaryEncoder.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletRotaryPoti.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletRotaryPoti.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletRS232.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletRS232.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletSegmentDisplay4x7.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletSegmentDisplay4x7.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletSolidStateRelay.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletSolidStateRelay.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletSoundIntensity.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletSoundIntensity.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletTemperature.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletTemperature.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletTemperatureIR.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletTemperatureIR.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletTilt.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletTilt.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletVoltage.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletVoltage.DEVICE_DISPLAY_NAME);
      break;
    case Tinkerforge.BrickletVoltageCurrent.DEVICE_IDENTIFIER:
      return (Tinkerforge.BrickletVoltageCurrent.DEVICE_DISPLAY_NAME);
      break;
    default:
      return('NAME: unknown');
      break;
  }
