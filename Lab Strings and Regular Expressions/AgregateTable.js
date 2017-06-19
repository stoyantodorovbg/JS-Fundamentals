/**
 * Created by Stoyan on 5.6.2017 г..
 */
function  aggregate (arr) {

    let towns = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split('|').filter(e => e != '');
        towns.push(line[0].trim(' '));
        sum += Number(line[1]);
    }

    console.log(towns.join(', '));
    console.log(sum);
}

aggregate(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);
