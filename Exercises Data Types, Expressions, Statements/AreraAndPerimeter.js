/**
 * Created by Stoyan on 23.5.2017 г..
 */
function calculate (sideA, sideB)
{
    "use strict";
    let area = sideA * sideB;
    let perimeter = (sideA * 2) + (sideB * 2);

    console.log(area);
    console.log(perimeter);
}
calculate(2, 2)