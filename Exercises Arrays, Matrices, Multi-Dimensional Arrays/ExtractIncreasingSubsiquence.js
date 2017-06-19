/**
 * Created by Stoyan on 3.6.2017 г..
 */
function solve (arr) {
    let result = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {
            result.push(arr[i]);
        }
    }

    return result.join('\n');
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
