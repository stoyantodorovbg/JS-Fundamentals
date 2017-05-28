/**
 * Created by Stoyan on 25.5.2017 г..
 */
function  printTable (number) {
    let result = '<table border="1">';

    for (let i = 0; i <= number; i++) {
        result += '<tr>';
        let index = i;
        for (let e = 0; e <= number; e++) {

            if (i == 0 && e == 0) {
                result += '<th>x</th>';
            } else if (i == 0 && e != 0){
                result += `<th>${e}</th>`;
            } else if (i != 0 && e == 0) {
                result += `<th>${i}</th>`;
            } else if (i != 0 && e > 0){
                result += `<td>${index}</td>`;
            }
            if (e >= 1) {
                index += i;
            }

        }
        result += `</tr>`
    }


    result += '</table>';

    return result;
}
console.log(printTable(5));