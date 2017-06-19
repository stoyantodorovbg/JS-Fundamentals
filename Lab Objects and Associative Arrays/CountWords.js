/**
 * Created by Stoyan on 11.6.2017 г..
 */
function countWords (arr) {
    let result = new Map();
    for (let line of arr) {
        let words = line.match(/[A-Za-z0-9_]+/g);
        for (let word of words) {

            if (!result.has(word.toLowerCase())) {
                result.set(word.toLowerCase(), 1);
            } else {
                result.set(word.toLowerCase(), result.get(word.toLowerCase()) + 1);
            }
        }
    }

    result = [...result].sort();


    for (let [key, value] of result) {
        console.log(`'${key}' -> ${value} times`);
    }

}

countWords(["The man was walking the dog down the road when it suddenly started barking against the other dog. Surprised he pulled him away from it."]);
