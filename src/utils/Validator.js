class Validator {
  static isNumeric(str) {
    const NUMBER_REGEXP = /^[0-9]+$/;
    return NUMBER_REGEXP.test(str);
  }

  static isZeroStart(str) {
    const ZERO_START_REGEXP = /^[0]+/;
    return ZERO_START_REGEXP.test(str);
  }

  static isBetween(start, str, end) {
    return start <= parseInt(str, 10) && parseInt(str, 10) <= end;
  }
}

module.exports = Validator;
