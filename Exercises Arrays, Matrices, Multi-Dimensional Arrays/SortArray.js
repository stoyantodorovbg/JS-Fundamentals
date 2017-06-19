/**
 * Created by Stoyan on 3.6.2017 г..
 */
function  solve (arr) {

    return arr.sort(compare).join('\n');

    function compare (a, b) {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        }
    }
}

console.log(solve(['alpha', 'beta', 'gamma']));
