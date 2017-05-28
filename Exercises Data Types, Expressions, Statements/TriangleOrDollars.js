/**
 * Created by Stoyan on 25.5.2017 г..
 */
function  printTriangle (number) {
    for (let i = 0; i < number; i++){
        let line = '$';
        for (let e = 0; e < i; e++) {
            line += '$';
        }
        console.log(line);
    }
}

printTriangle(3);
