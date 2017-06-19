/**
 * Created by Stoyan on 12.6.2017 г..
 */
function  find (arr) {
    let unuques = [];
    for (let row of arr) {
        row = row.toLowerCase();
        let words = row.match(/[\w]+/g);
        for (let word of words) {
            if (!unuques.includes(word)) {
                unuques.push(word);
            }
        }
    }

    return unuques.join(', ');

}

console.log(find([
        'orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
        'uisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
        'estibulum dolor diam, dignissim quis varius non, fermentum non felis.',
        'estibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
        'orbi in ipsum varius, pharetra diam vel, mattis arcu.',
        'nteger ac turpis commodo, varius nulla sed, elementum lectus.',
        'ivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'

]));
