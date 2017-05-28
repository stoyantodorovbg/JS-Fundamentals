/**
 * Created by Stoyan on 24.5.2017 г..
 */
function  convertToFoot (number) {
    let inches = number % 12;
    let foots = (number - inches) / 12;

    return `${foots}'-${inches}"`;
}

console.log(convertToFoot(55));