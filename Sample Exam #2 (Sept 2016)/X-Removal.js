/**
 * Created by Stoyan on 17.6.2017 г..
 */
function remove (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('');
    }

    let lastRow = arr[arr.length - 2];


    for (let i = 0; i < arr.length - 1; i++) {
        for (let e = 0; e < arr[i].length; e++) {
            if (e == 0 && e < arr[i + 1].length - 1) {
                if (arr[i][e].toLowerCase() == arr[i + 1][e + 1].toLowerCase()) {
                    arr[i][e] = '';
                }
            } else if (e == arr[i].length - 1 && e < arr[i + 1].length) {
                if (arr[i][e].toLowerCase() == arr[i + 1][e - 1].toLowerCase()) {
                    arr[i][e] = '';
                }
            } else if (e < arr[i + 1].length - 1){
                if (arr[i][e].toLowerCase() == arr[i + 1][e - 1].toLowerCase() ||
                    arr[i][e].toLowerCase() == arr[i + 1][e + 1].toLowerCase()) {
                    arr[i][e] = '';
                }
            }
        }
    }

    for (let i = 0; i < arr[arr.length - 1].length; i++) {
        if (i == 0) {
            if (arr[arr.length - 1][i].toLowerCase() == lastRow[i + 1].toLowerCase()) {
                arr[arr.length - 1][i] = '';
            }
        } else if (i == arr[arr.length - 1][i - 1] && (i - 1) < lastRow.length) {
            if (arr[arr.length - 1][i].toLowerCase() == lastRow[i - 1].toLowerCase()) {
                arr[arr.length - 1][i] = '';
            }
        } else if (i < arr[arr.length - 1].length - 1){
            if (arr[arr.length - 1][i].toLowerCase() == lastRow[i - 1].toLowerCase() ||
                arr[arr.length - 1][i].toLowerCase() == lastRow[i + 1].toLowerCase()) {
                arr[arr.length - 1][i] = '';
            }
        }
    }

    console.log(arr);
}

remove([
    'abnbjs',
    'xoBab',
    'Abmbh',
    'aabab',
    'ababvvvv'
]);
