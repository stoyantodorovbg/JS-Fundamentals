/**
 * Created by Stoyan on 17.6.2017 г..
 */
function store (arr) {
    let players = [];
    let splitRows = [];
    for (let row of arr) {
        let rowArr = row.split('|');
        splitRows.push(rowArr);
        if (rowArr[1] == 'age') {
            let obj = {color: rowArr[0], age: rowArr[2]};
            players.push(obj);
        }
    }
    for (let row of splitRows) {
        if (row[1] == 'name') {
            for (let player of players) {
                if(player.color == row[0]) {
                    player.name = row[2];
                }
            }
        }
    }
    for (let i = 0; i < players.length; i++) {
        if (!players[i].hasOwnProperty('name')) {
            players.splice(i, 1);
        }
    }

    for (let i = 0; i < players.length; i++) {
        players[i].wins = [];
        players[i].losses = [];
        players[i].opponents = [];
    }

    for (let row of splitRows) {
        if (row[1] == 'win' || row[1] == 'loss') {
            for (let player of players) {
                if (player.color == row[0]) {
                    player.opponents.push(row[2]);
                    if (row[1] == 'win') {
                        player.wins.push(row[2]);
                    } else {
                        player.losses.push(row[2])
                    }

                }
            }
        }
    }

    for (let player of players) {
        player.rank = ((player.wins.length + 1) / (player.losses.length + 1)).toFixed(2);
    }
    players.sort((a, b) => b.age > a.age);

    for (let player of players) {
        if (player.opponents.length != 0) {
            player.hackJson = '"';
        } else {
            player.hackJson = '';
        }
    }

    let resultArr = [];
    for (let player of players) {
        resultArr.push(`"${player.color}":{"age":"${player.age}","name":"${player.name}","opponents":[${player.hackJson}${player.opponents.sort().join('","')}${player.hackJson}],"rank":"${player.rank}"}`);

    }
    console.log(`{${resultArr.join(',')}}`);
}

store([
    'purple|age|99',
    'red|age|44',
    'blue|win|pesho',
    'blue|win|mariya',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Yana',
    'purple|loss|Yana',
    'purple|loss|Manov',
    'purple|loss|Manov',
    'red|name|gosho',
    'jd|name|njxwnj',
    'blue|win|Vladko',
    'purple|loss|Yana',
    'purple|name|VladoKaramfilov',
    'blue|age|21',
    'blue|loss|Pesho'
]);
