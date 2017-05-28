/**
 * Created by Stoyan on 27.5.2017 г..
 */
function printFigure(number = 5) {


    for (let i = 0; i < number; i++ ) {
        console.log(printLine(number));
    }

    function printLine (n) {
        return '* '.repeat(n);
    }

}

printFigure();
