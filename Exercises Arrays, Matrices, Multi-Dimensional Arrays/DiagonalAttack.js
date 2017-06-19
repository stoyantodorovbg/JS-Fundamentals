/**
 * Created by Stoyan on 4.6.2017 г..
 */
function  compareDiagonals (arr) {

      let matrix = [];

    for (let i = 0; i < arr.length; i++) {
        matrix[i] = arr[i].split(' ');
   }

    let firstD = 0;

    for (let i = 0; i < matrix.length; i++) {
        firstD += Number(matrix[i][i]);
    }

    let secD = 0;
    let counter = matrix.length - 1;
    let indexesSecI = [];
    let indexesSecE = [];

    for (let i = 0; i < matrix.length; i++) {
        secD += Number(matrix[i][i + counter]);
        indexesSecI.push(i + counter);
        indexesSecE.push(i + counter);
        counter -= 2;
    }

    if (firstD == secD) {
        for (let i = 0; i < matrix.length; i++) {
            counter = matrix.length - 1;
            for (let e = 0; e < matrix.length; e++) {
                if (e != i && i != e + counter) {
                    matrix[i][e] = firstD;
                }
                counter -= 2;
            }
        }
        return matrix.map(row => row.join(' ')).join('\n');

    } else {
        return matrix.map(row => row.join(' ')).join('\n');
    }
}

console.log(compareDiagonals(
        ['5 3 12 3 1',
            '11 4 23 2 5',
            '101 12 3 21 10',
            '1 4 5 2 2',
            '5 22 33 11 1']));
