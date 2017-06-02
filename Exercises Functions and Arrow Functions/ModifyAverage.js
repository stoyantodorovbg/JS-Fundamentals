/**
 * Created by Stoyan on 31.5.2017 г..
 */
function  modify(number) {

    let average = 0;

    while (average <= 5) {
        average = findAverageOfDigits(number);
        if (average <= 5) {
            number = number + '9';
        }

    }

    return number;

    function  findAverageOfDigits(number) {
        let sum = 0;
        for (let i = 0; i < number.toString().length; i++) {
            sum += Number(number.toString()[i]);
        }

        return sum / number.toString().length;
    }

}

console.log(modify(101));
