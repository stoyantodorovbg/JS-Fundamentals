/**
 * Created by Stoyan on 13.6.2017 г..
 */
function calculateBuild (arr) {
    let minSection = Number.MAX_VALUE;
    arr = arr.map(n => Number(n));

    for (let num of arr) {
        if (num < minSection) {
            minSection = num;
        }
    }
    let dailyConcreteArr = [];

    while (minSection < 30) {
        let dailyConcrete = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 30) {
                arr[i] ++;
                dailyConcrete += 195
            }

        }
        dailyConcreteArr.push(dailyConcrete);
        minSection++;
    }

    let concreteSum = 0;
    for (let day of dailyConcreteArr){
        concreteSum += day;
    }
    let sumInPessos = concreteSum * 1900;

    console.log(dailyConcreteArr.join(', '));
    console.log(`${sumInPessos} pesos`);
}

calculateBuild([21, 25, 28]);
