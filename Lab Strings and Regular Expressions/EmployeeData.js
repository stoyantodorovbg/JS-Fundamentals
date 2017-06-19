/**
 * Created by Stoyan on 6.6.2017 г..
 */
function solve (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split(' - ');

        if (line[0].match(/^[A-Z][a-zA-Z]*$/) &&
            (line[1].match(/^[1-9][0-9]*$/)) &&
        line[2].match(/^[A-Za-z0-9\- ]+$/)) {
            result.push(line);
        }
    }

    let printResult = [];
    for (let i = 0; i < result.length; i++) {
        printResult.push(`Name: ${result[i][0]}\nPosition: ${result[i][2]}\nSalary: ${result[i][1]}`);
    }

    return printResult.join('\n');
}

console.log(solve(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee'
]));