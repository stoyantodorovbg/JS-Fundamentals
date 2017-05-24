/**
 * Created by Stoyan on 23.5.2017 г..
 */
function checkLeapYear (year)
{
    "use strict";
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

checkLeapYear(2000);
