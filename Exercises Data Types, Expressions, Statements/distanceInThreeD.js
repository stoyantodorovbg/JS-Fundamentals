/**
 * Created by Stoyan on 24.5.2017 г..
 */
function calculateDistance(args) {
    let x1 = args[0];
    let y1 = args[1];
    let z1 = args[2];
    let x2 = args[3];
    let y2 = args[4];
    let z2 = args[5];

    let threeDDist = Math.sqrt(findDifPow(x1, x2) + findDifPow(y1, y2) + findDifPow(z1, z2));

    function findDifPow(num1, num2) {
        let dif = Math.abs(num1 - num2);
        let difPow = dif * dif;
        return difPow;
    }

    return threeDDist;

}

console.log(calculateDistance([1, 1, 0, 5, 4, 0]));
