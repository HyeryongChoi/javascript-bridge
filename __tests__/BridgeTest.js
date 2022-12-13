const Bridge = require('../src/models/Bridge');

describe('Bridge 테스트', () => {
  test.each([[['D', 'U']], [['d', 'D', 'D']], [['1', 'D', 'U']]])(
    '유효한 다리패턴이 아니면 예외를 발생시킨다.',
    (pattern) => {
      expect(() => new Bridge(pattern)).toThrow('[ERROR]');
    },
  );

  test.each([
    [['U', 'D', 'U'], 'D', 1, true],
    [['U', 'D', 'D'], 'U', 2, false],
  ])('현재 칸의 정답여부를 반환한다.', (pattern, moving, curIndex, checking) => {
    const bridge = new Bridge(pattern);
    expect(bridge.match(moving, curIndex)).toEqual(checking);
  });
});
