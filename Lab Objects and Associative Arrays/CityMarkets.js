/**
 * Created by Stoyan on 11.6.2017 г..
 */
function storeProducts (arr) {
    let arrMap = [];
    let keys = [];

     for (let line of arr) {
         let lineArr = line.split(' -> ');
         let sale = {};
         sale.town = lineArr[0];
         sale.product = lineArr[1];

         let countPriceArr = lineArr[2].split(' : ');
         sale.count = Number(countPriceArr[0]);
         sale.price = Number(countPriceArr[1]);
         arrMap.push(sale);
         if (!keys.includes(lineArr[0])) {
             keys.push(lineArr[0]);
         }

     }

     for (let i = 0; i < keys.length; i++) {
         console.log(`Town - ${keys[i]}`);
         for (let e = 0; e < arrMap.length; e++) {
             if (arrMap[e].town == keys[i]) {
                 console.log(`$$$${arrMap[e].product} : ${arrMap[e].count * arrMap[e].price}`);
             }
         }
     }

}

storeProducts([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'

]);
