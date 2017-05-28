/**
 * Created by Stoyan on 25.5.2017 г..
 */
function  isInsideOrOutside (args) {
    let x = args[0];
    let y = args[1];
    let xMin = args[2];
    let xMax = args[3];
    let yMin = args[4];
    let yMax = args[5];

    if ((x >= xMin && x <= xMax) && (y >= yMin && y <= yMax)) {
        console.log('inside');
    } else {
        console.log('outside');
    }
}

isInsideOrOutside([2, -3, 2, 12, -3, 3]);
