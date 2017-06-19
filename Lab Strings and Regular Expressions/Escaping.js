/**
 * Created by Stoyan on 5.6.2017 г..
 */
function  escapeTags (arr) {
    let result = [];
    let tags = ['<', '>', '&', '"'];
    let replaces = ['&lt;', '&gt;', '&amp;', '&quot;'];

    for (let e = 0; e < arr.length; e++) {
        let newEl = arr[e];
        for (let i = 0; i < tags.length; i++) {
            let index = arr[e].indexOf(tags[i]);
            while (index> -1) {
                newEl = newEl.replace(tags[i], replaces[i]);
                index = newEl.indexOf(tags[i], index + 1);
            }


        }
        arr[e] = newEl;
        arr[e] = '  <li>' + arr[e] + '</li>';
        result.push(arr[e]);
    }

    console.log('<ul>');
    console.log(result.join('\n'));
    console.log(('</ul>'));
}

escapeTags(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']);