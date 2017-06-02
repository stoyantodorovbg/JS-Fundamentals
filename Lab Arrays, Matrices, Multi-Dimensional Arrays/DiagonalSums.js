/**
 * Created by Stoyan on 2.6.2017 г..
 */
function findSum (matrix) {
    let mainSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        mainSum += matrix[i][i];
    }
    let secSum = 0;
    let counter = matrix.length - 1;
    for (let e = 0; e < matrix.length; e++) {
        for (let i = 0; i < matrix.length; i++) {
            if (counter == i) {
                secSum += matrix[e][i];
            }

        }
        counter--;
    }
    console.log(mainSum + ' ' + secSum);
}

findSum([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);
