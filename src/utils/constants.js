const BRIDGE = Object.freeze({
  1: 'U',
  0: 'D',
  up: 'U',
  down: 'D',
  minSize: 3,
  maxSize: 20,
});

const GAME = Object.freeze({
  correct: 'O',
  wrong: 'X',
  blank: ' ',
  success: '성공',
  failure: '실패',
  retry: 'R',
  quit: 'Q',
});

const INPUT_MESSAGE = Object.freeze({
  enterBridgeSize: '다리의 길이를 입력해주세요.\n',
  enterMoving: `이동할 칸을 선택해주세요. (위: ${BRIDGE.up}, 아래: ${BRIDGE.up})\n`,
  enterGameCommand: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${GAME.retry}, 종료: ${GAME.quit})\n`,
});

const OUTPUT_MESSAGE = Object.freeze({
  newLine: '',
  gameStart: '다리 건너기 게임을 시작합니다.\n',
  gameQuit: '최종 게임 결과',
  gameResult: (result) => `게임 성공 여부: ${result}`,
  gameTryCount: (tryCount) => `총 시도한 횟수: ${tryCount}`,
});

const ERROR_MESSAGE = Object.freeze({
  bridgeSize: `\n[ERROR] 다리 길이는 ${BRIDGE.minSize}부터 ${BRIDGE.maxSize} 사이의 숫자여야 합니다.\n`,
  moving: `\n[ERROR] 이동할 칸은 ${BRIDGE.up} 또는 ${BRIDGE.down}를 입력하여야 합니다.\n`,
  gameCommand: `\n[ERROR] 게임 명령어는 ${GAME.retry} 또는 ${GAME.quit}를 입력하여야 합니다.\n`,
});

module.exports = {
  BRIDGE,
  GAME,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE,
};
