/**
 * Created by Stoyan on 12.6.2017 г..
 */
function stringifyData (arr) {
    "use strict";
    let heroData = [];
    for (let line of arr) {
        let lineArr = line.split(/\s\/\s/);
        let hero = {
            name: lineArr[0],
            level: Number(lineArr[1]),
            items: lineArr[2].split(', '),
        };
        heroData.push(hero);
    }

    return JSON.stringify(heroData);
}

console.log(stringifyData([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));
