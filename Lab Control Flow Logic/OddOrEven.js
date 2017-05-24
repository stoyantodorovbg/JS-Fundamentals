/**
 * Created by Stoyan on 23.5.2017 г..
 */
function oddOrEven(number) {
    if (Math.ceil(number) != number) {
        console.log('invalid');
    } else if (number % 2 == 0) {
        console.log('even');
    } else if (number % 2 != 0) {
        console.log('odd');
    }
}
oddOrEven(2);
