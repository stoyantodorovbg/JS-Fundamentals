/**
 * Created by Stoyan on 24.5.2017 г..
 */
function  round(args) {
    let number = args[0];
    let precision = args[1];

    if (precision > 15) {
        precision = 15;
    }

    let count = 0;
    number = number.toFixed(precision);

    for (let i = number.length - 1; i >= 0; i--) {
        if (number[i] != 0) {
            break;
        } else {
            count++;
        }
    }

    if (count > 0){
        number = Number(number).toFixed(precision - count);
    }

    return number
}

console.log(round([10.5, 3]));