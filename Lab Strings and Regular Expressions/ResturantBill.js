/**
 * Created by Stoyan on 5.6.2017 г..
 */
function printBill (arr) {
    let items = arr.filter((e, i) => i % 2 == 0);
    let sumArr = arr.filter((e, i) => i % 2 != 0);
    let sum = sumArr.map(e => Number(e)).reduce((a, b) => a + b);

    return `You purchased ${items.join(', ')} for a total sum of ${sum}`;

}

console.log(printBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']));