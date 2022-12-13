const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE, BRIDGE, GAME } = require('../utils/constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printGameStart() {
    Console.print(OUTPUT_MESSAGE.gameStart);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeMap) {
    Console.print(`[ ${bridgeMap[BRIDGE.up].join(' | ')} ]`);
    Console.print(`[ ${bridgeMap[BRIDGE.down].join(' | ')} ]`);
    OutputView.printNewLine();
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(isSuccess, bridgeMap, tryCount) {
    const result = isSuccess ? GAME.success : GAME.failure;
    Console.print(OUTPUT_MESSAGE.gameQuit);
    OutputView.printMap(bridgeMap);
    Console.print(OUTPUT_MESSAGE.gameResult(result));
    Console.print(OUTPUT_MESSAGE.gameTryCount(tryCount));
    Console.close();
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },

  printNewLine() {
    Console.print(OUTPUT_MESSAGE.newLine);
  },
};

module.exports = OutputView;
