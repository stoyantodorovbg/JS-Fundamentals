/**
 * Created by Stoyan on 16.6.2017 г..
 */
function fight (arr) {
    let whiteScore = 0;
    let darkScore = 0;

    let lastWhiteAttackPower = 0;
    let lastDarkAttackPower = 0;

    let whiteAttacks = [];
    let darkAttacks = [];

    for (let line of arr) {
        let lineArr = line.split(' ');
        let power = Number(lineArr[0]) * 60;
        let side = lineArr[1];
        if (side == 'white') {
            if (whiteAttacks.length == 0 || lastWhiteAttackPower == power) {
                whiteAttacks.push(side);
            } else {
                whiteAttacks = [];
            }
            lastWhiteAttackPower = power;
        } else {
            if (darkAttacks.length == 0 || lastDarkAttackPower == power) {
                darkAttacks.push(side);
            } else {
                darkAttacks = [];
            }
            lastDarkAttackPower = power;

        }
        if (whiteAttacks.length == 2) {
            power *= 2.75;
            whiteAttacks = [];
            lastWhiteAttackPower = 0
        } else if (darkAttacks.length == 5) {
            power *= 4.5;
            darkAttacks = [];
            lastDarkAttackPower = 0
        }

        if (side == 'white') {
            whiteScore += power;
        } else {
            darkScore += power;
        }
    }

    if (whiteScore > darkScore) {
        console.log('Winner - Vitkor');
        console.log(`Damage - ${whiteScore}`);
    } else if (darkScore > whiteScore) {
        console.log('Winner - Naskor');
        console.log(`Damage - ${darkScore}`);
    }
}

fight([
    '2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas'
]);
