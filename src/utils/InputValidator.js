const Validator = require('./Validator');
const { ERROR_MESSAGE, BRIDGE } = require('./constants');

class InputValidator extends Validator {
  static validateBridgeSize(size) {
    if (
      !InputValidator.isNumeric(size) ||
      InputValidator.isZeroStart(size) ||
      !InputValidator.isBetween(BRIDGE.minSize, size, BRIDGE.maxSize)
    ) {
      throw new Error(ERROR_MESSAGE.bridgeSize);
    }
  }
}

module.exports = InputValidator;
