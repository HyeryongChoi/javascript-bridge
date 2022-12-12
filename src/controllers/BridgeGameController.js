const BridgeGame = require('../models/BridgeGame');
const { printGameStart, printError } = require('../views/OutputView');
const { readBridgeSize } = require('../views/InputView');

class BridgeGameController {
  #bridgeGame;

  playGame() {
    printGameStart();
    readBridgeSize(this.onReadBridgeSize.bind(this));
  }

  onReadBridgeSize(bridgeSize) {
    try {
      this.#bridgeGame = new BridgeGame(bridgeSize);
    } catch (err) {
      printError(err.message);
      readBridgeSize(this.onReadBridgeSize.bind(this));
    }
  }
}

module.exports = BridgeGameController;
