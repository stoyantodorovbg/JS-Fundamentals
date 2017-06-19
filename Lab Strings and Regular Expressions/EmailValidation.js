/**
 * Created by Stoyan on 5.6.2017 г..
 */
function  validate (email) {
    if (email.match(/^[A-za-z0-9]+@[a-z]+\.[a-z]+$/g)) {
        return 'Valid';
    } else {
        return 'Invalid';
    }
}

console.log(validate('valid@email.bg'));