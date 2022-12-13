const Validator = require('./Validator');
const { BRIDGE, GAME, ERROR_MESSAGE } = require('./constants');

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

  static validateMoving(moving) {
    const isValidMoving = moving === BRIDGE.up || moving === BRIDGE.down;
    if (!isValidMoving) throw new Error(ERROR_MESSAGE.moving);
  }

  static validateGameCommand(gameCommand) {
    const isValidGameCommand = gameCommand === GAME.retry || gameCommand === GAME.quit;
    if (!isValidGameCommand) throw new Error(ERROR_MESSAGE.gameCommand);
  }
}

module.exports = InputValidator;
