/**
 * Created by Stoyan on 23.5.2017 г..
 */
function  calculate(speedA, speedB, time) {
    time /= 60;
    let firstDist = speedA * time;
    let secondDist = speedB * time;
    let deferenceDist = Math.abs(firstDist - secondDist);

    console.log(deferenceDist);
}

calculate(0, 60, 3600);