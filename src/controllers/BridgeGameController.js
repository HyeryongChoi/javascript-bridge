const BridgeGame = require('../models/BridgeGame');
const { readBridgeSize, readMoving, readGameCommand } = require('../views/InputView');
const {
  printGameStart,
  printMap,
  printResult,
  printError,
  printNewLine,
} = require('../views/OutputView');
const { validateGameCommand } = require('../utils/InputValidator');

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
      if (canMove) this.handleMoveOrSuccess();
      if (!canMove) readGameCommand(this.onReadGameCommand.bind(this));
    } catch (err) {
      printError(err.message);
      readMoving(this.onReadMoving.bind(this));
    }
  }

  handleMoveOrSuccess() {
    if (this.#bridgeGame.isSuccess()) return printResult(true, this.#bridgeGame.getResultMap(), 1);
    readMoving(this.onReadMoving.bind(this));
  }

  onReadGameCommand(gameCommand) {
    try {
      validateGameCommand(gameCommand);
      this.handleRetryOrQuit(gameCommand);
    } catch (err) {
      printError(err.message);
      readGameCommand(this.onReadGameCommand.bind(this));
    }
  }

  handleRetryOrQuit(gameCommand) {}
}

module.exports = BridgeGameController;
