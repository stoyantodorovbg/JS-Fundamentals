/**
 * Created by Stoyan on 5.6.2017 г..
 */
function count(match, string) {
    let count = 0;
    let indexStart = string.indexOf(match);

    while (indexStart > -1) {
        indexStart = string.indexOf(match, indexStart + 1);

        count++;
    }

    return count;

}

console.log(count('the', 'The quick brown fox jumps over the lay dog.'));