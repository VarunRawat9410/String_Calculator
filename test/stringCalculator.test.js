const StringCalculator = require('../stringCalculator')

describe("String Calculator", function() {
    let calculator

    beforeEach(function() {
        calculator = new StringCalculator()
    })

    test("should return zero when '' is passed", function() {
        expect(calculator.add('')).toBe(0)
    })

    test("should return the number itself when a single number is passed", function() {
        expect(calculator.add('1')).toBe(1)
    })

    test("should return the sum of the numbers if two are given", function() {
        expect(calculator.add('1,2')).toBe(3)
    })

    test("should return the sum of an unknown amount of numbers", function() {
        const randomArray = (length, max) => [...new Array(length)]
            .map(() => Math.round(Math.random() * max))

        const randy = Math.floor((Math.random() * 100) + 1)
        const res = randomArray(randy, randy)
        const sum = res.filter(n => n <= 1000).reduce((pv, cv) => pv + cv, 0)
        const arg = res.join()
        expect(calculator.add(arg)).toBe(sum)
    })

})
