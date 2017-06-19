/**
 * Created by Stoyan on 5.6.2017 г..
 */
function printNames (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split('@');
        let letters = line[1].split('.');
        let appendix = '';
        for (let i = 0; i < letters.length; i++) {
            appendix = appendix + letters[i][0];
        }
        let name = line[0] + '.' + appendix;
        result.push(name);
    }

    return result.join(', ');
}

console.log(printNames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));
