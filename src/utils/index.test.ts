import { testTestFn } from '.'

describe('true is truthy and false is falsy', () => {
  test('testTestFn Test', () => {
    expect(testTestFn(1, 2)).toBe(3)
  })
})
