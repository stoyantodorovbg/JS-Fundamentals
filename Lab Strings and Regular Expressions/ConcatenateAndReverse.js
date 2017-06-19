/**
 * Created by Stoyan on 5.6.2017 г..
 */
function print (arr) {
    arr.reverse();

    for (let i = 0; i < arr.length; i++) {
        let revercedWord = '';
        for (let e = arr[i].length - 1; e >= 0; e--) {
            revercedWord = revercedWord + arr[i][e];
        }
        arr[i] = revercedWord;
    }

    return arr.join('');
}

console.log(print(['I', 'am', 'student']));
