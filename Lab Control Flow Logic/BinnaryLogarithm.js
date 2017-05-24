/**
 * Created by Stoyan on 24.5.2017 г..
 */
function  findBinaryLog(numbers) {

    for (let i = 0; i < numbers.length; i++) {
        console.log(Math.log2(numbers[i]));
    }

}
findBinaryLog([1, 2, 3]);
