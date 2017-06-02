/**
 * Created by Stoyan on 2.6.2017 г..
 */
function printNumbers (arr) {
    let result = arr.sort((a, b) => a - b).slice(0, 2);

    console.log(result.join(' '));
}

printNumbers([30, 15, 50, 5]);