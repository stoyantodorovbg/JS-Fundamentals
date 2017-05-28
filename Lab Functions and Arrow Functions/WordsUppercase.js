/**
 * Created by Stoyan on 27.5.2017 г..
 */
function  extract (input) {
    let stringUpper = input.toUpperCase();
    let words = split(stringUpper);
    words = words.filter(x => x != '');
    console.log(words.join(', '));



    function split (stringUpper) {
        let wordsArr = stringUpper.split(/\W+/);
        return wordsArr;
    }
}

extract('Hi, how are you?');
