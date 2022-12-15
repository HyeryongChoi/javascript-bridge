const InputValidator = require('../src/utils/InputValidator');

describe('InputValidator 테스트', () => {
  test.each([['2'], ['21'], ['a']])('유효한 다리길이 입력이 아니면 예외가 발생한다.', (input) => {
    expect(() => InputValidator.validateBridgeSize(input)).toThrow('[ERROR]');
  });

  test.each([['r'], ['dd'], ['1']])('유효한 칸 입력이 아니면 예외가 발생한다.', (input) => {
    expect(() => InputValidator.validateMoving(input)).toThrow('[ERROR]');
  });

  test.each([['r'], ['q'], ['1']])('유효한 게임명령어 입력이 아니면 예외가 발생한다.', (input) => {
    expect(() => InputValidator.validateGameCommand(input)).toThrow('[ERROR]');
  });
});
