/**
 * Created by Stoyan on 11.6.2017 г..
 */
function toJson (arr) {
    let json = {};

    for (let i = 0; i < arr.length - 1; i += 2) {
        let [town, income] = [arr[i], Number(arr[i + 1])];
        if (json[arr[i]] == undefined) {
            json[arr[i]] = Number(arr[i + 1]);
        } else {
            json[arr[i]] += Number(arr[i + 1]);
        }
    }

    return JSON.stringify(json);
}

console.log(toJson([
    'Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4'
]));
