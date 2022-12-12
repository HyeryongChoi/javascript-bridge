const BridgeGame = require('../models/BridgeGame');
const { readBridgeSize, readMoving } = require('../views/InputView');
const { printGameStart, printError, printNewLine } = require('../views/OutputView');

class BridgeGameController {
  #bridgeGame;

  playGame() {
    printGameStart();
    readBridgeSize(this.onReadBridgeSize.bind(this));
  }

  onReadBridgeSize(bridgeSize) {
    try {
      this.#bridgeGame = new BridgeGame(bridgeSize);
      printNewLine();
      readMoving(this.onReadMoving.bind(this));
    } catch (err) {
      printError(err.message);
      readBridgeSize(this.onReadBridgeSize.bind(this));
    }
  }

  onReadMoving(moving) {
    try {
      this.#bridgeGame.move(moving);
    } catch (err) {
      printError(err.message);
      readMoving(this.onReadMoving.bind(this));
    }
  }
}

module.exports = BridgeGameController;
