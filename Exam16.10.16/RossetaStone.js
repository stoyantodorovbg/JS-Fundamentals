/**
 * Created by Stoyan on 16.6.2017 г..
 */
function translate (arr) {
    let matrixRowsNum = Number(arr[0]);

    let litMatrix = [];
    for (let i = 1; i < matrixRowsNum + 1; i++) {
        litMatrix.push(arr[i]);
    }
    litMatrix = litMatrix.map(r => r.split(' ').map(e => Number(e)));

    let bigMatrix = [];
    for (let i = matrixRowsNum + 1; i < arr.length; i++) {
        bigMatrix.push(arr[i]);
    }
    bigMatrix = bigMatrix.map(r => r.split(' ').map(e => Number(e)));

    let alphabet =
        [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z'];

    let result = [];

    for (let i = 0; i < bigMatrix.length; i += litMatrix.length) {
        for (let a = 0; a < litMatrix.length; a++) {
            for (let e = 0; e < bigMatrix[i].length; e += litMatrix[0].length) {
                let newMatrix = [];
                    for (let u = 0; u < litMatrix[0].length; u++) {
                        if (i + a < bigMatrix.length &&
                        u + e < bigMatrix[i].length) {
                            let num = litMatrix[a][u] + bigMatrix[i + a][e + u];
                            num %= 27;
                            result.push(alphabet[num]);
                    }
                }
            }
        }
    }
    console.log(result.join(''));
}

translate([
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'
]);
