/**
 * Created by Stoyan on 27.5.2017 г..
 */
function isPalindrome(word) {
    for (let i = 0; i < word.length / 2 - 1; i++) {
        if (word[i] != word[word.length - i - 1]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome('hatah'));