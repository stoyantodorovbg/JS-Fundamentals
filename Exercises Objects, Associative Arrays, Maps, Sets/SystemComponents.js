/**
 * Created by Stoyan on 13.6.2017 г..
 */
function store(arr) {
    let data = [];
    let mapSystemComponent = new Map();
    let mapSystemCount = new Map();

    for (let row of arr) {
        let rowArr = row.split(' | ');
        let obj = {
            system: rowArr[0],
            component: rowArr[1],
            sub: rowArr[2]
        };
        data.push(obj);
        mapSystemComponent.set(rowArr[0], rowArr[1]);
        mapSystemCount.set((rowArr[0]), 0);
    }

    for (let obj of data) {
        for (let [key, value] of mapSystemComponent) {

            if (obj.component == value) {
                mapSystemCount.set(key, mapSystemCount.get(key) + 1);
            }
        }
    }


    console.log(mapSystemCount);


}

store([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);
