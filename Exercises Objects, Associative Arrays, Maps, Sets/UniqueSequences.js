/**
 * Created by Stoyan on 13.6.2017 г..
 */
function findUnique(arr) {
    let set = new Set();

    for (let row of arr) {
        row = JSON.parse(row);
        row.sort((a, b) => b - a);
        row = JSON.stringify(row);

        set.add(row);
    }
    set = [...set].sort((a, b) => a.length - b.length);
    for (let row of set) {
        row = JSON.parse(row);
        console.log(`[${row.join(', ')}]`);
    }
}

findUnique([
        '[-3, -2, -1, 0, 1, 2, 3, 4]',
        '[10, 1, -17, 0, 2, 13]',
        '[4, -3, 3, -2, 2, -1, 1, 0]'

]);
