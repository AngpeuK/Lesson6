import { MathOperations } from '../src/math-operations'

describe('MathOperations Class testing', () => {
  let mathOps: MathOperations

  test('should add two positive numbers correctly', () => {
    mathOps = new MathOperations()
    expect(mathOps.add(2, 3)).toBe(5)
  })

  test('should add two numbers correctly', () => {
    mathOps = new MathOperations()
    expect(mathOps.add(-3, 3)).toBe(0)
  })
})

describe('MathOperations Class testing Squaring', () => {
  let mathOps: MathOperations

  test('should square two positive numbers correctly', () => {
    mathOps = new MathOperations()
    expect(mathOps.squaring(2)).toBe(4)
  })
})

describe('MathOperations Class testing SquareRoot', () => {
  let mathOps: MathOperations

  test('should squareRoot from numbers correctly', () => {
    mathOps = new MathOperations()
    expect(mathOps.squareRoot(2)).toBeCloseTo(1.414)
  })
})
