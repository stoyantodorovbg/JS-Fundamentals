/**
 * Created by Stoyan on 13.6.2017 г..
 */
function compiteCars(arr) {

    let carsMap = new Map();
    let brands = [];

    for (let line of arr){
        let lineArr = line.split(' | ');
        if (!brands.includes(lineArr[0])) {
            brands.push(lineArr[0]);
        }
        if (!carsMap.has(`${lineArr[0]}+${lineArr[1]}`)) {
            carsMap.set(`${lineArr[0]}+${lineArr[1]}`, Number(lineArr[2]));
        } else {
            carsMap.set(`${lineArr[0]}+${lineArr[1]}`,
                carsMap.get(`${lineArr[0]}+${lineArr[1]}`) + Number(lineArr[2]));
        }

    }

    for (let brand of brands) {
        console.log(brand);
        for (let [key, value] of carsMap) {
            let keyArr = key.split('+');
            if (keyArr[0] == brand) {
                console.log(`###${keyArr[1]} -> ${value}`);
            }
        }
    }
}

compiteCars([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);
