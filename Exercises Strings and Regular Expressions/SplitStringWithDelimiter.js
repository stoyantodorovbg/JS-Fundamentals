/**
 * Created by Stoyan on 6.6.2017 г..
 */
function splitText (text, delimiter) {
    return text.split(delimiter).join('\n');
}

console.log(splitText('One-Two-Three-Four-Five', '-'));
