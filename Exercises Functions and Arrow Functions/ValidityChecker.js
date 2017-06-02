/**
 * Created by Stoyan on 31.5.2017 г..
 */
function checker(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    
    console.log(isValid(x1, y1, 0, 0));
    console.log(isValid(x2, y2, 0, 0));
    console.log(isValid(x1, y1, x2, y2));

    
    function isValid(x1, y1, x2, y2) {
        if (Math.sqrt((Math.abs(x1 - x2) ** 2) + (Math.abs(y1 - y2) ** 2)) % 2 == 0 ||
            Math.sqrt((Math.abs(x1 - x2) ** 2) + (Math.abs(y1 - y2) ** 2)) % 2 == 1) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
        }

        return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }
}

checker([3, 0, 0, 4]);
