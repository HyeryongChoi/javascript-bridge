const BridgeGame = require('../models/BridgeGame');
const { printGameStart } = require('../views/OutputView');

class BridgeGameController {
  #bridgeGame;

  playGame() {
    printGameStart();
  }
}

module.exports = BridgeGameController;
