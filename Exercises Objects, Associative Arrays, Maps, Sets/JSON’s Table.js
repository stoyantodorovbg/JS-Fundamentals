/**
 * Created by Stoyan on 12.6.2017 г..
 */
function convert (arr) {
    "use strict";
    let html = '<table>\n';

    for (let line of arr) {
        html += '<tr>\n';
        //let lineEsc = escapeHTML(line);
        let json = JSON.parse(line);
        html += `<td>${json.name}</td>\n`;
        html += `<td>${json.position}</td>\n`;
        html += `<td>${json.salary}</td>\n`;


        html += '<tr>\n';
    }

    html += '</table>';

    return html;

    function escapeHTML(text) {
        let map = {
            '"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };

        return text.replace(/["&'<>]/g, ch =>
            map[ch]);
    }
}

console.log(convert([
        '{"name":"Pesho","position":"Promenliva","salary":100000}',
        '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}'

    ]));


