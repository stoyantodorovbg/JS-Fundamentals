/**
 * Created by Stoyan on 6.6.2017 г..
 */
function parseCalculate(text) {
    let matches = text.match(/-?\d*\.?(\d*)?\s*\*\s*-?\d*\.?(\d*)?/g);
    let purchases = text.match(/\([A-za-z]+\)/g);
    let firsPart = text.match(/[A-Za-z ]+:/);

    for (let i = 0; i < matches.length; i++) {
        let line = matches[i];
        line = line.replace(/\s/g, '');
        line = line.split('*');
        line = Number(line[0]) * Number(line[1]);
        matches[i] = line;
    }

    let result = [];

    for (let i = 0; i < matches.length; i++) {
        result[i] = matches[i] + ' ' + purchases[i];
        if (i < matches.length - 1) {
            result[i] = result[i] + ';'
        }
    }

    return firsPart + ' ' + result.join(' ') + '.';
}


console.log(parseCalculate('My Bill is: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).'));