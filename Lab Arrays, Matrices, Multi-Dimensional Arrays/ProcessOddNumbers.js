/**
 * Created by Stoyan on 2.6.2017 г..
 */
function transformElements (arr) {
    let result = arr.filter((e, i) => i % 2 != 0);
    result = result.map(e => e * 2);
    result.reverse();
    console.log(result.join(' '));
}

transformElements([3, 0, 10, 4, 7, 3]);
