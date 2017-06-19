/**
 * Created by Stoyan on 11.6.2017 г..
 */
function toJSON (arr) {
    let result = [];
    for (let row of arr.slice(1)) {
        let [empty, townName, lat, lng] = row.split(/\s*\|\s*/);
        let townObj = {Town: townName, Latitude: Number(lat), Longitude: Number(lng)};
        result.push(townObj)
    }

    return JSON.stringify(result);
}

console.log(toJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));
