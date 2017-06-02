/**
 * Created by Stoyan on 2.6.2017 г..
 */
function  transformArr (arr) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            resultArr.splice(0, 0, arr[i]);
        } else {
            resultArr.push(arr[i]);
        }
    }

    return resultArr.join('\n');
}
console.log(transformArr([1, 3, -10, -7, 11]));
