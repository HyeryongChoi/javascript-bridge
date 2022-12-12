class Bridge {
  #pattern;

  constructor(pattern) {
    this.#pattern = pattern;
  }

  match(moving, curIndex) {
    if (this.#pattern[curIndex] === moving) return true;
    return false;
  }
}

module.exports = Bridge;
