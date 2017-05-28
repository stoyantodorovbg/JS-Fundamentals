/**
 * Created by Stoyan on 25.5.2017 г..
 */
function solveEqution(a, b, c) {
    let discriminant = (b ** 2) - (4 * a * c);


    if (discriminant > 0) {
        let root1 = ((0 - b) + Math.sqrt(discriminant)) / (2 * a);
        let root2 = ((0 - b) - Math.sqrt(discriminant)) / (2 * a);

        root1 = root1.toFixed(5);
        root2 = root2.toFixed(5);

        console.log(Math.min(root1, root2));
        console.log(Math.max(root1, root2));

    } else if (discriminant == 0){
        let root = (0 - b) / (2 * a);
        console.log(root);

    } else if (discriminant < 0) {
        console.log('No');
    }
}

solveEqution(6, 11, -35);
