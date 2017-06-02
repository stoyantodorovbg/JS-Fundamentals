/**
 * Created by Stoyan on 31.5.2017 г..
 */
function radar(arr) {
    let speed = arr[0];
    let zone = arr[1];

    function  getLimit(zone) {
        switch (zone) {
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }
    
    function getInfraction(speed, zone) {
        let permitedSpeed = getLimit(zone);
        if (permitedSpeed - speed < 0 && permitedSpeed - speed >= -20) {
            console.log('speeding');
        } else if (permitedSpeed - speed < -20 && permitedSpeed - speed >= -40) {
            console.log('excessive speeding');
        } else if (permitedSpeed - speed < -40) {
            console.log('reckless driving');
        }
    }

    getInfraction(speed, zone);
}

radar([40, 'city']);
