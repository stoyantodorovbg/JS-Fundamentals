/**
 * Created by Stoyan on 2.6.2017 г..
 */
function printKnumbers (arr) {
    let k = arr[0];

    arr.splice(0, 1);
    let arrCopy = arr;


    let firstK = arr.slice(0, k);
    let lastK = arrCopy.slice(-k);


    console.log(firstK.join(' '));
    console.log(lastK.join(' '));

}
printKnumbers([2, 7, 8, 9]);
