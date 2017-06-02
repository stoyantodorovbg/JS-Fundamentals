/**
 * Created by Stoyan on 1.6.2017 г..
 */
function remove (arr) {
    "use strict";
    let aim = arr[0];

    for (let i = 1; i < arr.length; i++) {

        let rural = arr[i];
        let invoked = [];

        console.log(`Processing chunk ${rural} microns`);

        while (rural != aim) {

            let ruralChange = false;
            let ruralLast = rural;
            let stop = false;

            if (rural < aim) {
                stop = true;
            }
            rural = invoke(rural, aim, invoked);
            if (ruralLast != rural) {
                ruralChange = true;
            }

            if (ruralChange && !stop) {
                rural = wash(rural);
            }

        }

        console.log(`Finished crystal ${aim} microns`);
    }

    function invoke (rural, aim, invoked) {
        if (cut(rural, aim)[0] >= aim - 1 && !invoked.includes('cut')) {

            if (cut(rural, aim)[1] > 0) {
                console.log(`Cut x${cut(rural, aim)[1]}`);
            }
            invoked.push('cut');
            rural = cut(rural, aim)[0];
        } else if (lap(rural, aim)[0] > grind(rural, aim)[0] && lap(rural, aim)[0] >= aim - 1
            && !invoked.includes('lap')) {

            if (lap(rural, aim)[1] > 0) {
                console.log(`Lap x${lap(rural, aim)[1]}`);
            }
            invoked.push('lap');
            rural = lap(rural, aim)[0];

        } else if (grind(rural, aim)[0] >= aim - 1 && !invoked.includes('grind')) {

            if (grind(rural, aim)[1]) {
                console.log(`Grind x${grind(rural, aim)[1]}`);
            }
            invoked.push('grind');
            rural = grind(rural, aim)[0];
        } else if (etch(rural, aim)[0] >= aim - 1 && !invoked.includes('etch')) {

            if (etch(rural, aim)[1]) {
                console.log(`Etch x${etch(rural, aim)[1]}`);
            }
            invoked.push('etch');
            rural = etch(rural, aim)[0];
        } else {
            console.log(`X-ray x1`);
            rural = increase(rural);
        }
        return rural;
    }

    function cut(rural, aim) {
        let counter = 0;
        while (true) {
            if (rural / 4 < aim - 1) {
                break;
            }
            rural /= 4;
            counter++;
        }
        return [rural, counter];

    }
    function lap (rural, aim) {
        let counter = 0;
        while (true) {
            if (rural - (rural * 0.2) < aim - 1) {
                break;
            }
            rural = rural - (rural * 0.2);
            counter++;
        }

        return [rural, counter];
    }

    function grind (rural, aim) {
        let counter = 0;
        while (true) {
            if (rural - 20 < aim - 1) {
                break;
            }
            rural -= 20;
            counter++;
        }
        return [rural, counter];
    }

    function etch (rural, aim) {
        let counter = 0;
        while (true) {
            if (rural - 2 < aim - 1) {
                break;
            }
            rural -= 2;
            counter++;
        }
        return [rural, counter];
    }

    function increase (rural) {
        return rural + 1;
    }

    function wash (rural) {
        console.log(`Transporting and washing`);
        return Math.floor(rural);
    }

}

remove([1000, 1374]);