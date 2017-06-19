/**
 * Created by Stoyan on 17.6.2017 г..
 */
function solve (arr){
    "use strict";
    arr = arr.map(i => Number(i)).map(i => Math.floor(i));
    let mainType = [];
    let type = [];
    for (let i = 0; i < arr.length; i++) {
        let blade = arr[i];
        if (blade > 10) {
            if (blade > 40) {
                mainType.push('sword');
            } else {
                mainType.push('dagger');
            }
            if ((blade - 1) % 5 === 0) {
                type.push('blade');
            } else if ((blade - 2) % 5 === 0) {
                type.push('quite a blade');
            } else if ((blade - 3) % 5 === 0) {
                type.push('pants-scraper');
            } else if ((blade - 4) % 5 === 0) {
                type.push('frog-butcher');
            } else if ((blade - 5) % 5 === 0) {
                type.push('*rap-poker');
            }
        } else {
            arr.splice(i, 1);
            i--;
        }
    }

    let html = '<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>\n';

    for (let i = 0; i < arr.length; i++) {
        html += `<tr><td>${arr[i]}</td><td>${mainType[i]}</td><td>${type[i]}</td></tr>\n`;
    }

    html += '</tbody>\n</table>';

    console.log(html);
}

solve([
    '17.8',
    '19.4',
    '13',
    '55.8',
    '126.96541651',
    '3'
]);