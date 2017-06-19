/**
 * Created by Stoyan on 5.6.2017 г..
 */
function getWords(text) {
    let result = text.match(/[A-Za-z0-9_]+/g);
    return result.join('|');
}

console.log(getWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text'));
