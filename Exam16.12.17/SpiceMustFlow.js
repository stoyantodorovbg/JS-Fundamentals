/**
 * Created by Stoyan on 13.6.2017 г..
 */
function  calculate(arr) {
    let source = Number(arr[0]);
    let result = 0;
    let days = 0;

    while (source >= 100) {
        result += source - 26;
        source -= 10;
        days++
    }

    if (result >= 26) {
        result -= 26;
    }

    console.log(days);
    console.log(result);
}

calculate(['0']);
