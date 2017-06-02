/**
 * Created by Stoyan on 2.6.2017 г..
 */
function printHelix (number) {
    let counter = 0;
    let letters = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let countLet = 0;
    while (counter < number)
    {
        for (let i = 0; i < 4; i++) {
            counter ++;
            if (counter == number + 1) {
                break;
            }

            if (i == 0) {
                console.log(`**${letters[countLet]}${letters[countLet + 1]}**`);
            } else if (i == 1) {
                console.log(`*${letters[countLet]}--${letters[countLet + 1]}*`);
            } else if (i == 2) {
                console.log(`${letters[countLet]}----${letters[countLet + 1]}`);
            } else if (i == 3) {
                console.log(`*${letters[countLet]}--${letters[countLet + 1]}*`);
            }

            countLet += 2;

            if (countLet == 10) {
                countLet = 0;
            }

        }
    }

}

printHelix(10);
