/**
 * Created by Stoyan on 11.6.2017 г..
 */
function printPopulation (arr) {
    let map = new Map();

    for (let line of arr) {
        let lineArr = line.split(' <-> ');

        if (!map.has(lineArr[0])) {
            map.set(lineArr[0], Number(lineArr[1]));
        } else (
            map.set(lineArr[0], map.get(lineArr[0]) + Number(lineArr[1]))
        )

    }
    let result = '';

    for (let [key, value] of map) {
        result += `${key} : ${value}\n`
    }

    return result;
}

console.log(printPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 1000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'Sofia <-> 1300000'

]));
