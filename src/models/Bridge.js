const { BRIDGE, ERROR_MESSAGE } = require('../utils/constants');

class Bridge {
  #pattern;

  constructor(pattern) {
    this.validate(pattern.length, pattern);
    this.#pattern = pattern;
  }

  validate(size, pattern) {
    const isValideSize = BRIDGE.minSize <= size && size <= BRIDGE.maxSize;
    const isValidePattern = pattern.every(
      (element) => element === BRIDGE.up || element === BRIDGE.down,
    );
    if (!isValideSize || !isValidePattern) throw new Error(ERROR_MESSAGE.makeBridge);
  }

  match(moving, curIndex) {
    if (this.#pattern[curIndex] === moving) return true;
    return false;
  }

  getSize() {
    return this.#pattern.length;
  }
}

module.exports = Bridge;
