/**
 * Created by Stoyan on 6.6.2017 г..
 */
function checkEnd(text, part) {
    let index = -1;
    while (index != 0) {
        index = text.indexOf(part);
        if (index == text.length - part.length) {
            return true;
        }
        index++;

    }

    return false;
}

//console.log(checkEnd('This sentence ends with fun?', 'fun?'));

console.log(checkEnd('This is Houston, we have…', 'We have…'));
