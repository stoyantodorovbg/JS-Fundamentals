/**
 * Created by Stoyan on 27.5.2017 г..
 */
function aggregate(arr) {

    function aggregate(elements, start, func) {
        for (let element of elements) {
            start = func(start, element)
        }
        return start;
    }

    console.log(aggregate(arr, 0, (a, b) => a + b));
    console.log(aggregate(arr, 0, (a, b) => a + 1 / b));
    console.log(aggregate(arr, '', (a, b) => a + b));

}

aggregate([1, 1, 1, 1]);