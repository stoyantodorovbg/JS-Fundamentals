/**
 * Created by Stoyan on 6.6.2017 г..
 */
function  checkStart (text, part) {
    if (text.indexOf(part) == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkStart('How have you been?', 'how'));
