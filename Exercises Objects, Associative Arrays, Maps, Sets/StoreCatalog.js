/**
 * Created by Stoyan on 13.6.2017 г..
 */
function store (arr) {
    let resultMap = new Map();

    for (let row of arr) {
        let rowsArr = row.split(' : ');
        resultMap.set(rowsArr[0], rowsArr[1]);
    }

    resultMap = [...resultMap].sort((a, b) => a[0].toLowerCase() > b[0].toLowerCase());
    let letters = [];

    for ([key, value] of resultMap) {

        if (!letters.includes(key[0])) {
            console.log(key[0].toUpperCase());
        }
        letters.push(key[0]);

        console.log(`  ${key}: ${value}`);


    }
}

store([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'

]);