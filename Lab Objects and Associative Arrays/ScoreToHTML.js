/**
 * Created by Stoyan on 11.6.2017 г..
 */
function  solve (json) {
    let html = '<table>\n';

    let scores = JSON.parse(json);
    html += '   <tr>';

    html += '<th>name</th><th>score</th>';

    html += '</tr>\n';

    for (let line of scores) {
        html += '   <tr>';
        
        html += `<td>${escapeHTML(line.name)}</td><td>${Number(line.score)}</td>`;
        
        html += '</tr>\n';
    }
    
    function escapeHTML(text) {
        let map = {
            '"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };

        return text.replace(/["&'<>]/g, ch =>
        map[ch]);
    }



    html += '</table>';

    return html
}

console.log(solve('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'));
