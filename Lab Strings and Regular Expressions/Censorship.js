/**
 * Created by Stoyan on 5.6.2017 г..
 */
function replaceText (text, arr) {
    let censorWords = [];

    for (let i = 0; i < arr.length; i++) {
        censorWords.push(createCensor(arr[i].length));
    }

    for (let i = 0; i < arr.length; i++) {
        while (text.indexOf(arr[i]) > -1) {
            text = text.replace(arr[i], censorWords[i]);
        }
    }

    return text;

    function createCensor(wordLength) {
        let word = '';
        for (let i = 0; i < wordLength; i++) {
            word += '-';
        }
        return word;
    }
}

console.log(replaceText('roses are red, violets are blue', [', violets are', 'red']));
