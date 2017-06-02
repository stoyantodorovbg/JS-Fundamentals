/**
 * Created by Stoyan on 2.6.2017 г..
 */
function  solve (n, k) {

    let result = [1];

    for (let i = 0; i < n - 1; i++) {
        let element = 0;
        let counerEl = 0;
        for (let e = 0; e <= i; e ++) {
            if (e < k) {
                element += result[e];
            } else {
                element += result[e];
                element -= result[counerEl];
                counerEl++;
            }
        }
        result.push(element);
    }

    return result.join(' ');

}

console.log(solve(8, 2));
