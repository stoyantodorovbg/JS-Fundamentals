/**
 * Created by Stoyan on 12.6.2017 г..
 */
function findLowestPrice (arr) {
    let map = new Map();

    for (let row of arr) {
        let rowArr = row.split(' | ');
        let product = {};
        product.town = rowArr[0];
        product.product = rowArr[1];
        product.price = Number(rowArr[2]);
        if (!map.has(rowArr[1]) || map.get(rowArr[1]).price > Number(rowArr[2])) {
            map.set(rowArr[1], product)
        }
    }

    for (let [key, value] of map) {
        console.log(`${key} -> ${value.price} (${value.town})`);
    }

}

findLowestPrice([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 1',
    'Sofia City | Mercedes | 100',
    'Sofia City | NoOffenseToCar',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi',
    'New York City | Mitsubishi',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes'


]);
