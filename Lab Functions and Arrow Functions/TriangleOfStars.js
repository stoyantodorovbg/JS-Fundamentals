/**
 * Created by Stoyan on 27.5.2017 г..
 */
function createTriangle(number) {
    for (let i = 1; i <= number; i++) {
        console.log(printLine(i));
    }

    for (let i = number - 1; i > 0; i--) {
        console.log(printStars(i));
    }

    function printLine (n) {
        return '*'.repeat(n);
    }
}

createTriangle(3);
