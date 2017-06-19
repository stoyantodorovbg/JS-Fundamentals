/**
 * Created by Stoyan on 12.6.2017 г..
 */
function createBottles (arr) {
    let map = new Map();
    let resultMap = new Map();
    for (let line of arr) {
        let lineArr = line.split(' => ');
        if (!map.has(lineArr[0])) {
           map.set(lineArr[0], Number(lineArr[1]));
        } else {
            map.set(lineArr[0], map.get(lineArr[0]) + Number(lineArr[1]));
        }
        if (map.get(lineArr[0]) >= 1000) {
            if (!resultMap.has(lineArr[0])) {
                resultMap.set(lineArr[0], map.get(lineArr[0]));
            } else {
                resultMap.set(lineArr[0], resultMap.get(lineArr[0]) + (map.get(lineArr[0]) - resultMap.get(lineArr[0])));
            }
        }

    }

    for (let [key, value] of resultMap) {
        console.log(`${key} => ${Math.floor(value / 1000)}`);
    }

}

createBottles([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);
