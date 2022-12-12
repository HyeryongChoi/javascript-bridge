const { GAME, BRIDGE } = require('../utils/constants');

class BridgeResult {
  #bridgeMap = { U: [], D: [] };

  mark(canMove, moving) {
    const notMoving = moving === BRIDGE.up ? BRIDGE.down : BRIDGE.up;
    if (canMove) this.#bridgeMap[moving].push(GAME.correct);
    if (!canMove) this.#bridgeMap[moving].push(GAME.wrong);
    this.#bridgeMap[notMoving].push(GAME.blank);
  }

  getBridgeMap() {
    return Object.freeze(this.#bridgeMap);
  }
}

module.exports = BridgeResult;
