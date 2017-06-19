/**
 * Created by Stoyan on 3.6.2017 г..
 */
function checkForMagic (matrix) {

    let sumRows = [];

    for (let i = 0; i < matrix.length; i++) {
        sumRows.push(matrix[i].reduce((a, b) => a + b));
    }

    let arrOfMatrix = matrix.reduce((a, b) => a.concat(b));
    let sumCols = [];

    for (let e = 0; e < matrix.length; e++) {
        let sum = 0;
        for (let i = e; i < arrOfMatrix.length; i += matrix.length) {
            sum += arrOfMatrix[i];
        }
        sumCols.push(sum);
    }

    let isMagic = true;

    for (let i = 0; i < sumRows.length; i++) {
        if (sumRows[i] != sumCols[i]) {
            isMagic = false;
        }
    }

    return isMagic;
}

console.log(checkForMagic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]





));
