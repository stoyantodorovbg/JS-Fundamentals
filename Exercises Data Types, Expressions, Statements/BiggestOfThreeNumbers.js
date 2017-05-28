/**
 * Created by Stoyan on 25.5.2017 г..
 */
function  findBiggest (args) {
    let first = args[0];
    let second = args[1];
    let third = args[2];

    let result = Math.max(first, second, third);

    return result;
}

console.log(findBiggest([130, 5, 99]));
