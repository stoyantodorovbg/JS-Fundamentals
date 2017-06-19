/**
 * Created by Stoyan on 3.6.2017 г..
 */
function rotate(arr) {
    let rotations = Number(arr[arr.length - 1]);

    arr.splice(arr.length - 1);
    rotations %= arr.length;

    for (let e = 0; e < rotations; e++) {
        let lastElement = arr[arr.length - 1];
        for (let i = arr.length - 1; i > 0; i --) {
            arr[i] = arr[i - 1];
        }
        arr[0] = lastElement;
    }


    console.log(arr.join(' '));
}

rotate(['1', '2', '3', '4', '2']);
