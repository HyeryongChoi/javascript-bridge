const INPUT_MESSAGE = Object.freeze({
  enterBridgeSize: '다리의 길이를 입력해주세요.\n',
  enterMoving: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  newLine: '',
  gameStart: '다리 건너기 게임을 시작합니다.\n',
  gameQuit: '\n최종 게임 결과',
  gameResult: (result) => `\n게임 성공 여부: ${result}`,
  gameTryCount: (tryCount) => `총 시도한 횟수: ${tryCount}`,
});

const ERROR_MESSAGE = Object.freeze({
  bridgeSize: '\n[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
  moving: '\n[ERROR] 이동할 칸은 U 또는 D를 입력하여야 합니다.\n',
});

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
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE,
  BRIDGE,
  GAME,
};
