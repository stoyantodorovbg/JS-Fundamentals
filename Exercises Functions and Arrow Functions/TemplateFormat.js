/**
 * Created by Stoyan on 31.5.2017 г..
 */
function  format(arr) {

console.log('<?xml version="1.0" encoding="UTF-8"?>\n<quiz>');

    for (let i = 0; i < arr.length; i ++) {
        if (i % 2 == 0) {
            console.log(`  <question>\n    ${arr[i]}\n  </question>`)
        } else {
            console.log(`  <answer>\n    ${arr[i]}\n  </answer>`)
        }
    }

    console.log('</quiz>');

}

format(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);
