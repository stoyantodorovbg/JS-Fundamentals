/**
 * Created by Stoyan on 7.6.2017 г..
 */
function findNumbers (arr) {
    let result = [];
    for (let line of arr) {
        if (line.match(/[\d]+\.[\d]+|[\d]+/g)) {
            let matches = line.match(/[\d]+\.[\d]+|[\d]+/g);
            matches = matches.join(' ');
            result.push(matches);
        }
    }
    return result.join(' ');
}

console.log(findNumbers(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'
]));