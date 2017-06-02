/**
 * Created by Stoyan on 2.6.2017 г..
 */
function evenIndexElements (arr) {
    "use strict";
    let evenPosArr = arr.filter((e, i) => i % 2 == 0);

    return evenPosArr.join(' ');
}
console.log(evenIndexElements([1, 2, 5, 10]));