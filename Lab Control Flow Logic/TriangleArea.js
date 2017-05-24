/**
 * Created by Stoyan on 23.5.2017 г..
 */
function findTriangleArea(sideOne, sideTwo, sideThree) {
    let halfPerimeter = (sideOne + sideTwo + sideThree) / 2;
    let area = Math.sqrt(halfPerimeter * (halfPerimeter - sideOne) * (halfPerimeter - sideTwo) * (halfPerimeter - sideThree));
    console.log(area);
}

findTriangleArea(2, 3.5, 4);
