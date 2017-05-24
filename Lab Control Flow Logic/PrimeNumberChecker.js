/**
 * Created by Stoyan on 24.5.2017 г..
 */
function checkPrime(number) {
    let result = true;

    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                result = false;
            }
        }
        console.log(result);
    } else {
        console.log('false');
    }


}
checkPrime(8);