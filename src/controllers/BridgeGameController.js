const BridgeGame = require('../models/BridgeGame');
const { readBridgeSize, readMoving } = require('../views/InputView');
const { printGameStart, printMap, printError, printNewLine } = require('../views/OutputView');

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
      const canMove = this.#bridgeGame.move(moving);
      printMap(this.#bridgeGame.getResultMap());
      if (canMove) readMoving(this.onReadMoving.bind(this));
    } catch (err) {
      printError(err.message);
      readMoving(this.onReadMoving.bind(this));
    }
  }
}

module.exports = BridgeGameController;
