/**
 * Created by Stoyan on 3.6.2017 г..
 */
function solve(arr) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'add') {
            result.push(i + 1);
        } else if (arr[i] == 'remove') {
            result.splice(i - 1);
        }
    }

    if (result.length == 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

solve(['add', 'add', 'remove', 'add', 'add']);
