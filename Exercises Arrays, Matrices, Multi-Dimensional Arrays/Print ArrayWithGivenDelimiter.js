/**
 * Created by Stoyan on 3.6.2017 г..
 */
function print(arr) {
    let delimiter = arr[arr.length - 1];
    arr.splice(arr.length - 1);

    return arr.join(delimiter);
}

console.log(print(['One', 'Two', 'Three', 'Four', 'Five', '-']));