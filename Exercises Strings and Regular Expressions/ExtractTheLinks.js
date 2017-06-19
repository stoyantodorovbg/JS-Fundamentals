/**
 * Created by Stoyan on 7.6.2017 г..
 */
function findLinks (arr) {
    let result = [];
    for (let line of arr) {
        if (line.match(/www\.[a-zA-Z0-9\-]+(\.[a-z]+)+/g)){
            result.push(line.match(/www\.[a-zA-Z0-9\-]+(\.[a-z]+)+/g));
        }
    }


    return result.join('\n');
}

console.log(findLinks([
    'Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko'
]));