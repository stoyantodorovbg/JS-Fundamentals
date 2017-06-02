/**
 * Created by Stoyan on 31.5.2017 г..
 */
function performOperations(arr) {

    let number = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let command = arr[i];

        switch (command) {
            case 'chop':
                number = chop(number);
                console.log(number);
                break;
            case 'dice':
                number = dice(number);
                console.log(number);
                break;
            case 'spice':
                number = spice(number);
                console.log(number);
                break;
            case 'bake':
                number = bake(number);
                console.log(number);
                break;
            case 'fillet':
                number = fillet(number);
                console.log(number);
                break;
        }

    }

    function chop(number) {
        return number / 2;
    }

    function dice(number) {
        return Math.sqrt(number);
    }

    function spice(number) {
        return number + 1;
    }

    function bake(number) {
        return number * 3;
    }

    function fillet(number) {
        return number - (number * 0.2);
    }

}

performOperations([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
