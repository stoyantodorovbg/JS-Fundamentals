/**
 * Created by Stoyan on 16.6.2017 г..
 */
function calculate (arr) {
    arr = arr.map(e => Number(e));
    let products = [];


    for (let i = 0; i < arr.length - 1; i++) {
        let current = arr[i];
        if (current > 0 && current < 10) {
            let product = arr[i + 1];
            if (i + current < arr.length - 1) {
                for (let e = i + 2; e <= i + current; e ++) {
                    product *= arr[e];
                }

            } else {
                for (let a = i + 2; a < arr.length; a++) {
                    product *= arr[a];
                }
            }

            products.push(product);
        }
    }
    let biggestProduct = Number.NEGATIVE_INFINITY;
    for (let prod of products) {
        if (prod > biggestProduct) {
            biggestProduct = prod;
        }
    }

    console.log(biggestProduct);
}

calculate([
    '9',
    '5652',
    '5652',
    '9190',
    '4172',
    '494',
    '536',
    '9510',
    '1584',
    '0',
    '1',
    '10',
    '6',
    '0',
    '675',
    '8913',
    '1891',
    '4298',
    '269',
    '3754',
    '6459'


]);
