/**
 * Created by Stoyan on 13.6.2017 г..
 */
function store (arr) {
    let set = new Set();

    for (let row of arr) {
        set.add(row);
    }
    set = [...set]
       .sort((a, b) => a.length - b.length || a > b);

    for (let row of set) {
        console.log(row);
    }
}

store([
    'Ashton',
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);
