function combat (arr) {
    let matrix = [];
    for (let i = 0; i < arr.length - 1; i++) {
        matrix.push(arr[i].split(' ').map(e => Number(e)));
    }
    let bombs = [];
    arr[arr.length - 1] = arr[arr.length - 1].split(' ');
    for (let row of arr[arr.length - 1]) {
        bombs.push(row.split(',').map(e => Number(e)));
    }

    let damage = 0;
    let killed = 0;

    for (let row of matrix) {
        killed += row.length;
        for (let i = 0; i < row.length; i++) {
            damage += row[i];
        }
    }

    let passed = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let e = 0; e < matrix[i].length; e++) {
            for (let a = 0; a < bombs.length; a++) {
                if (bombs[a][0] == i && bombs[a][1] == e) {
                    let startRow = Math.max(i - 1, 0);
                    let endRow = Math.min(i + 1, matrix.length);
                    let startCol = Math.max(e - 1, 0);
                    let endCol = Math.min(e + 1, matrix[i].length);

                    for (let r = startRow; r <= endRow; r++) {

                        for (let c = startCol; c <= endCol; c++) {

                            if (matrix[r][c] <= matrix[i][e] && !passed.includes(`${r} ${c}`)
                            && (r != i || c != e) && matrix[r][c] > 0){
                                killed--;
                                damage -= matrix[r][c];
                                passed.push(`${r} ${c}`);

                            } else if (matrix[r][c] > matrix[i][e] && !passed.includes(`${r} ${c}`)
                                && (r != i || c != e) && matrix[r][c] > 0) {
                                damage -= matrix[i][e];
                                passed.push(`${r} ${c}`);
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(damage);
    console.log(killed);

}

combat([
    '10 10 10',
    '10 10 10',
    '10 10 10',
    '1, 0'

]);
