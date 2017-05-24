/**
 * Created by Stoyan on 23.5.2017 г..
 */
function  calculate (bottles, capacity) {
    let boxes = Math.ceil(bottles / capacity);
    console.log(boxes);
}
calculate(20, 5);