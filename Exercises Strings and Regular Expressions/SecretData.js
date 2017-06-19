/**
 * Created by Stoyan on 7.6.2017 г..
 */
function replaceData (arr) {
    let regNames = new RegExp(/\*[A-Z][a-z]+[\\.\n \t]/);
    let regPhones = new RegExp(/\+[\d\-]{10}[\\.\n \t]/);
    let regIds = new RegExp(/![A-Za-z0-9]+[\\.\n \t]/);
    let regBases = new RegExp(/_[A-Za-z0-9]+[\\.\n \t]/);

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let line = arr[i];
        if (line.match(regNames)) {
            result.push(line.match(regNames));
        }
        if (line.match(regPhones)) {
            result.push(line.match(regPhones));
        }
        if (line.match(regIds)) {
            result.push(line.match(regIds));
        }
        if (line.match(regBases)) {
            result.push(line.match(regBases));
        }
    }

    for (let i = 0; i < arr.length; i++) {

    }

    return result;


}

console.log(replaceData([
        'Agent *Ivankov was in the room when it all happened.',
        'The person in the room was heavily armed.',
        'Agent *Ivankov had to act quick in order.',
        'He picked up his phone and called some unknown number.',
        'I think it was +555-49-796',
        'I can\'t really remember...',
        'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
        'Then after that he disappeared from my sight.',
        'As if he vanished in the shadows.',
        'A moment, shorter than a second, later, I saw the person flying off the top floor.',
        'I really don\'t know what happened there.',
        'This is all I saw, that night.'

]));
