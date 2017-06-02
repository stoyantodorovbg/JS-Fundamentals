/**
 * Created by Stoyan on 31.5.2017 г..
 */
function findPlace(arr) {
    let index = 0;

    while (index < arr.length) {

        let inside = true;

        if (isInsideDimension(10, 50) == false) {
            inside = false;
        }

        index++;

        if (isInsideDimension(20, 80) == false) {
            inside = false;
        }

        index++;

        if (isInsideDimension(15, 50) == false) {
            inside = false;
        }

        if (inside) {
            console.log('inside');
        } else {
            console.log('outside');
        }

        index++;

        function isInsideDimension (point1, point2) {
            if (arr[index] < point1 || arr[index] > point2){
                return false;
            }

        }
    }
}

findPlace([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]
);
