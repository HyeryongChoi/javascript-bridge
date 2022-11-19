const { BRIDGE } = require('../utils/constants');

class BridgeResult {
  #isSuccess;
  #tryCount;
  #bridgeSize;
  #bridgeMap;

  constructor(bridgeSize) {
    this.#isSuccess = false;
    this.#tryCount = 1;
    this.#bridgeSize = bridgeSize;
  }

  save(bridgeMap) {
    this.#bridgeMap = bridgeMap;
  }

  checkSuccess() {
    this.#isSuccess =
      this.#bridgeMap[BRIDGE.UP].length === this.#bridgeSize &&
      !this.#bridgeMap[BRIDGE.UP].some((element) => element === BRIDGE.WRONG) &&
      !this.#bridgeMap[BRIDGE.DOWN].some((element) => element === BRIDGE.WRONG);
  }

  getResult() {
    const bridgeMap = this.#bridgeMap;
    const isSuccess = this.#isSuccess;
    const tryCount = this.#tryCount;
    return { bridgeMap, isSuccess, tryCount };
  }
}

module.exports = BridgeResult;