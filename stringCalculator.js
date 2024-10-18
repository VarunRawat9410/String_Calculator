class StringCalculator {
    add(numbers) {
        if (numbers === '') {
            return 0
        }
        let numArray = numbers.split(',')
        if(numArray.length===1) {
            return parseInt(numArray[0])
        }

        if(numArray.length>1) {
            let sum = 0
            for(let i=0;i<numArray.length;i++) {
                sum+=parseInt(numArray[i])
            }
            return sum
        }
    }

}

module.exports = StringCalculator