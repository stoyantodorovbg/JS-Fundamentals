/**
 * Created by Stoyan on 24.5.2017 г..
 */
function calculate(args)
{
    let principalSum = args[0];
    let interestRate = args[1];
    let frequency = args[2];
    let time = args[3];

    frequency = 12 / frequency;

    principalSum = principalSum * (1 + ((interestRate / 100) / frequency)) ** (frequency * time);


    return principalSum.toFixed(2);
}
console.log(calculate([100000, 5, 12, 25]));
