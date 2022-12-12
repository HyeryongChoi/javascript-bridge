const INPUT_MESSAGE = Object.freeze({
  enterBridgeSize: '다리의 길이를 입력해주세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  newLine: '',
  gameStart: '다리 건너기 게임을 시작합니다.\n',
});

const ERROR_MESSAGE = Object.freeze({
  bridgeSize: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
});

const BRIDGE = Object.freeze({
  1: 'U',
  0: 'D',
  minSize: 3,
  maxSize: 20,
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE,
  BRIDGE,
};
