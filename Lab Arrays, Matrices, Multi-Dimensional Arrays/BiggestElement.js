/**
 * Created by Stoyan on 2.6.2017 г..
 */
function findBiggestElement(matrix) {
    let result = matrix.reduce((row1, row2) => row1.concat(row2));

    result.sort((a, b) => b - a);

    return result[0];
}

console.log(findBiggestElement([[20, 50, 10], [8, 33, 145]]));