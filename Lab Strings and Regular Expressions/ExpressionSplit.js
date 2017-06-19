/**
 * Created by Stoyan on 6.6.2017 г..
 */
function solve (text) {
    let elements = text.split(/[(),;\s.]+/);

    console.log(elements.join('\n'));
}

solve('let sum = 4 * 4,b = "wow";');
