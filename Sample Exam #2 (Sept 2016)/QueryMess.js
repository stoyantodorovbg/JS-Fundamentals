/**
 * Created by Stoyan on 17.6.2017 г..
 */
function extract (arr) {
    let parts = [];
    for (let row of arr) {
        let rowArr = row.split('?');
        for (let part of rowArr) {
            if (part.match(/.+=.+/g)) {
               parts.push(part);
            }
        }
    }
    for (let part of parts) {
        let result = [];
        let partArr = part.split('&');
        for (let ex of partArr) {
            let exArr = ex.split('=');
            let contains = false;
            for (let item of result) {
                if (item[0] == exArr[0]) {
                    contains = true;
                }
            }
            if (!contains) {
                result.push([exArr[0], exArr[1]]);
            } else {
                for (let item of result) {
                    if (item[0] == exArr[0]) {
                        item.push(exArr[1]);
                    }
                }
            }
        }
        for (let item of result) {
            for (let i = 0; i < item.length; i++) {
                item[i] = item[i].replace(/^\+|^%20|\+$|%20$/, '');
                item[i] = item[i].replace(/%20|\+/g, ' ');
            }
        }
        let set = [];

        for (let i = 0; i < result.length; i++) {
            if (!set.includes(result[i][0])) {
                set.push([result[i][0]]);
            }
        }
        for (let i = 0; i < result.length; i++) {
            for (let e = 0; e < set.length; e++) {
                if (set[e][0] == result[i][0]) {
                    for (let a = 1; a < result[i].length; a++) {
                        set[e].push(result[i][a]);
                    }
                }
            }
        }
        for (let i = 0; i < set.length; i++) {
            for (let e = 0; e < set[i].length; e++) {
                set[i][e] = set[i][e].replace(/\s{1,}/g, ' ');
            }
        }

        let countRepeat = new Map();
        for (let i = 0; i < set.length; i++) {
            if (!countRepeat.has(set[i][0])) {
                countRepeat.set(set[i][0], 1);
            } else {
                countRepeat.set(set[i][0], countRepeat.get(set[i][0]) + 1);
            }
        }
        for (let i = set.length - 1; i >= 0; i--) {
            if (countRepeat.get(set[i][0]) > 1) {
                countRepeat.set(set[i][0], countRepeat.get(set[i][0]) - 1)
                set.splice(i, 1);
                i--;
            }
        }
        let print = '';
        for (let item of set) {
            print += `${item[0]}=[`;
            for (let i = 1; i < item.length; i++) {
                if (i != item.length - 1) {
                    print += `${item[i]}, `;
                } else {
                    print += `${item[i]}`;
                }

            }
            print += ']';
        }
        console.log(print);
        }
}

extract([
    'foo=%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
    ]);
