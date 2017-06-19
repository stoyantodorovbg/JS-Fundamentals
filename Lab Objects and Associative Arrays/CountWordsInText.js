/**
 * Created by Stoyan on 11.6.2017 г..
 */
function countWords (arr) {
    let result = {};
    for (let line of arr) {
        let words = line.match(/[a-zA-Z]+/g);
        for (let word of words) {
            if (result[word] == undefined) {
                result[word] = 1;
            } else {
                result[word]++;
            }
        }
    }

    return JSON.stringify(result);
}

console.log(countWords(["Far too slow, you're far too slow."]));