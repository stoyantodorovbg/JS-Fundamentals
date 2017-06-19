/**
 * Created by Stoyan on 6.6.2017 г..
 */
function adjustCasing(text) {
    text = text.split(' ');

    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].split('');
        for (let e = 0; e < text[i].length; e++) {
            if (e == 0) {
                if (text[i][e].match(/[a-z]/)) {
                    text[i][e] = text[i][e].toUpperCase();
                }
            } else {
                if (text[i][e].match(/[A-Z]/)) {
                    text[i][e] = text[i][e].toLowerCase();
                }
            }
        }
        text[i] = text[i].join('');
    }

    return text.join(' ');
}

console.log(adjustCasing('Was that Easy? tRY thIs onE for SiZe!'));
