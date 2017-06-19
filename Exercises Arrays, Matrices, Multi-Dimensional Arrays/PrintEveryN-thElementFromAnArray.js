/**
 * Created by Stoyan on 3.6.2017 г..
 */
function print (arr) {
    let step = Number(arr[arr.length - 1]);
    arr.splice(arr.length - 1);

    let result = [];
    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }
    return result.join('\n');
}

console.log(print(['dsa', 'asd', 'test', 'tset', '2']));
