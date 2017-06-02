/**
 * Created by Stoyan on 2.6.2017 г..
 */
function findEquals(matrix) {
    let counter = 0;
    for (let i = 0; i < matrix.length - 1; i++) {
            for (let e = 0; e < matrix[i + 1].length; e++) {
                if (matrix[i][e] == matrix[i + 1][e]){
                    counter++
                }
                if (e < matrix[i + 1].length - 1) {
                    if (matrix[i][e] == matrix[i][e + 1]) {
                        counter++
                    }
                }
            }
    }

    for (let i = 0; i < matrix[matrix.length - 1].length - 1; i++) {
        if (matrix[[matrix.length - 1]][i] == matrix[[matrix.length - 1]][i + 1]) {
            counter++
        }
    }

    return counter;
}
console.log(findEquals([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]

));
