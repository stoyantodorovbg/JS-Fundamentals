/**
 * Created by Stoyan on 24.5.2017 г..
 */
function  convertToDecimal (binary) {
    let digit = binary.split('').reverse().reduce(function(x, y, i){
        return (y === '1') ? x + Math.pow(2, i) : x;
    }, 0);
    return digit;
}

console.log(convertToDecimal('00001001'));
