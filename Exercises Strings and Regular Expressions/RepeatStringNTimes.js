/**
 * Created by Stoyan on 6.6.2017 г..
 */
function  repeat(text, times) {
    let result = '';
    for (let i = 0; i < Number(times); i++) {
        result = result + text;
    }
    return result;
}

console.log(repeat('repeat', '5'));