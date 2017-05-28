/**
 * Created by Stoyan on 25.5.2017 г..
 */
function setProperties (args) {
    let obj = {};
    obj[args[0]] = args[1];
    obj[args[2]] = args[3];
    obj[args[4]] = args[5];

    console.log(obj);
}

setProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);




