/**
 * Created by Stoyan on 25.5.2017 г..
 */
function  printSquare (number) {
    let result = '';
    if (number % 2 == 0) {
        for (let i = 0; i < number - 1; i++){
            for (let e = 0; e < (number * 2) - 1; e++) {
                if (i == 0 || i == number - 2 || i == (number - 2) / 2) {
                    if (e == 0 || e == number * 2 - 2 || e == ((number * 2) - 2) / 2) {
                        result += '+';
                    } else {
                        result += '-';
                    }
                } else {
                    if (e == 0 || e == number * 2 - 2 || e == ((number * 2) - 2) / 2) {
                        result += '|';
                    } else {
                        result += ' ';
                    }
                }

            }
            result += '\n';
        }
    } else {
        for (let i = 0; i < number; i++){
            for (let e = 0; e < (number * 2) - 1; e++) {
                if (i == 0 || i == number - 1 || i == (number - 1) / 2) {
                    if (e == 0 || e == number * 2 - 2 || e == ((number * 2) - 2) / 2) {
                        result += '+';
                    } else {
                        result += '-';
                    }
                } else {
                    if (e == 0 || e == number * 2 - 2 || e == ((number * 2) - 2) / 2) {
                        result += '|';
                    } else {
                        result += ' ';
                    }
                }

            }
            result += '\n';
        }
    }

    return result
}

console.log(printSquare(7));
