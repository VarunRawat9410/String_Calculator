const StringCalculator = require('../stringCalculator')

describe("String Calculator", function() {
    let calculator

    beforeEach(function() {
        calculator = new StringCalculator()
    })

    test("should return zero when '' is passed", function() {
        expect(calculator.add('')).toBe(0)
    })
})
