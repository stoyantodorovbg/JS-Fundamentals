/**
 * Created by Stoyan on 16.6.2017 г..
 */
function encode (arr) {
    let key = arr[0];

    let reg = new RegExp(`(\\s|^)${key}\\s*[A-Z!%$#]{8,}(\\s|\\.|$)`, 'gi');
    for (let i = 1; i < arr.length; i++) {
        let match = arr[i].match(reg);

        let regKey = new RegExp(`${key}`, 'gi');
        let trueKey = '';
        if (match != null) {
            trueKey = match.toString().match(regKey);
            match = match.toString().replace(regKey, key.toLowerCase());
            let regMessage = /\s+[A-Z!%$#]{8,}(\s|\.|$)/g;
            let message = match.match(regMessage);
            if (message != null) {
                message = message.toString().replace(/!/g, '1');
                message = message.replace(/%/g, '2');
                message = message.replace(/#/g, '3');
                message = message.replace(/\$/g, '4');
                let letters = message.match(/[A-Za-z]+/g);
                message = message.replace(/[A-Za-z]+/g, letters.toString().toLowerCase());
                match = match.replace(regMessage, message);
                match = match.replace(regKey, trueKey);
                arr[i] = arr[i].replace(reg, match);
            }
        }
        console.log(arr[i]);
    }
}

encode ([
    'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
]);
