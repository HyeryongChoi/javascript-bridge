const BridgeGameController = require('./controllers/BridgeGameController');

class App {
  #bridgeGameController;
  play() {
    this.#bridgeGameController = new BridgeGameController();
    this.#bridgeGameController.playGame();
  }
}

const app = new App();
app.play();

module.exports = App;
