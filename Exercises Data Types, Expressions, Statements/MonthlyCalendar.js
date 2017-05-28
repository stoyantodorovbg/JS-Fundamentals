/**
 * Created by Stoyan on 24.5.2017 г..
 */
function  createCalendar(args) {
    let day = args[0];
    let month = args[1];
    let year = args[2];


    let date = new Date(`${month}-${day}-${year}`);
    let firstDayOfMonth = new Date(`${month}-1-${year}`);

    let dayOfWeek = date.getDay();
    let firstDayOfMonthAsDayOfWeek = firstDayOfMonth.getDay();

    let html = '<table>\n<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';

    let lastMonthDays = 0;
    for (let i = 1; i < 7; i++) {
        if (i < firstDayOfMonthAsDayOfWeek) {
            lastMonthDays++;
        } else {
            break;
        }
    }
    let lastMonthDaysCount = lastMonthDays;
    let countOfFirstWeekDays = 7 - firstDayOfMonthAsDayOfWeek;

    let isDay = true;
    let dayOfMonth = 1;
    while (true) {
        let exit = false;
        html += '<tr>\n';
        for (let i = 1; i <= 7; i++) {
        //    if (lastMonthDaysCount + dayOfMonth == 7) {
        //        html += `</tr>\n`;
        //    }

            if (dayOfMonth > getLastDayOfMonth(month, year)){
                exit = true;
                break;
            }
            if (i <  firstDayOfMonthAsDayOfWeek && lastMonthDays >= 0) {
                html += `<td class="prev-month">${getLastDayOfMonth(month - 1, year) - lastMonthDays}</td>`;
                lastMonthDays --;
            } else if (i == 7) {
                html += `</tr>\n`;

            } else if (day == i) {
                html += `<tr><td class="today">${day}</td>`;
                dayOfMonth++;
                isDay = false;
            } else if (i >= dayOfWeek) {
                html += `<td>${dayOfMonth}</td>`;
                dayOfMonth++;
            }
        }

        html += '</tr>\n';
        if (exit){
            break;
        }
    }


    html += '</table>\n';

    console.log(html);
    return html;

    function getLastDayOfMonth(month, year) {

        let daysInMonth = 0;
        switch (month) {
            case 1:
                daysInMonth = 31;
                break;
            case 2:
                if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
                {
                    daysInMonth = 29;
                } else {
                    daysInMonth = 28;
                }
                break;
            case 3:
                daysInMonth = 31;
                break;
            case 4:
                daysInMonth = 30;
                break;
            case 5:
                daysInMonth = 31;
                break;
            case 6:
                console.log(30);
                break;
            case 7:
                daysInMonth = 31;
                break;
            case 8:
                daysInMonth = 31;
                break;
            case 9:
                daysInMonth = 30;
                break;
            case 10:
                daysInMonth = 31;
                break;
            case 11:
                daysInMonth = 30;
                break;
            case 12:
                daysInMonth = 31;
                break;
        }
        return daysInMonth;
    }
}

createCalendar([24, 12, 2012]);
