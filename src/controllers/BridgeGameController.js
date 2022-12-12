const BridgeGame = require('../models/BridgeGame');
const { printGameStart } = require('../views/OutputView');
const { readBridgeSize } = require('../views/InputView');

class BridgeGameController {
  #bridgeGame;

  playGame() {
    printGameStart();
    readBridgeSize(this.onReadBridgeSize.bind(this));
  }

  onReadBridgeSize(bridgeSize) {
    //this.#bridgeGame = new BridgeGame(bridgeSize);
  }
}

module.exports = BridgeGameController;
