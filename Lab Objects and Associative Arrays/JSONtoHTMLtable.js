/**
 * Created by Stoyan on 11.6.2017 г..
 */
function  solve (json) {

    let obj = JSON.parse(json);

    console.log(obj);

    let html = '<table>\n';

    html += '   <tr>';
    for (let key in json[0]) {
        html += `<th>${key.key}</th>`;
    }

    html += '</tr>\n';

    //for (let line ) {
    //    html += '   <tr>';
//
//
    //    html += '</tr>\n';
    //}

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

console.log(solve('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'));