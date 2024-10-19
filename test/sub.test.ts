import { subtraction } from '../src/calculator'

test('subtraction two positive numbers: passed', () => {
  const expectedResult = 2
  const actualResult = subtraction(1, -1)
  expect(actualResult).toBe(expectedResult)
})
