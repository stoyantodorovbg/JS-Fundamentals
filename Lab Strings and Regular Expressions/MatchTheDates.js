/**
 * Created by Stoyan on 6.6.2017 г..
 */
function chechFromDate (arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].trim('.').split(' ');
        let date = '';
        for (let i = 0; i < line.length; i++) {
            let date = line[i].match(/^([0-9]{2})-[A-Z][a-z]{2}-[0-9]{4}/g);
            if (date == null) {
                date = line[i].match(/^([0-9]{1})-[A-Z][a-z]{2}-[0-9]{4}/g);
            }
            if (date != null) {
                let dateArr = date[0].split('-');
                result = result + `${date} (Day: ${dateArr[0]}, Month: ${dateArr[1]}, Year: ${dateArr[2]})\n`;
            }
        }

    }

    return result.trim('\n');

}
console.log(chechFromDate(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
'My father is born on the 29-Jul-1955.'
]
));