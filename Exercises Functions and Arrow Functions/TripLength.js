/**
 * Created by Stoyan on 1.6.2017 г..
 */
function findShortestSegments(coords) {

    let paths = [];

    paths.push(findPath(coords[0], coords[1], coords[2], coords[3]));
    paths.push(findPath(coords[2], coords[3], coords[4], coords[5]));
    paths.push(findPath(coords[4], coords[5], coords[0], coords[1]));

    let longest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < paths.length; i++) {
        if (paths[i] > longest) {
            longest = paths[i];
        }
    }

    if (longest == paths[0]) {
        return `1->3->2: ${paths[1] + paths[2]}`;
    } else if (longest == paths[1]) {
        return `2->1->3: ${paths[0] + paths[2]}`;
    } else if (longest == paths[2]) {
        return `1->2->3: ${paths[0] + paths[1]}`;
    }

    function  findPath(x1, y1, x2, y2) {
         return Math.sqrt((Math.abs(x1 - x2) ** 2) + (Math.abs(y1 - y2) ** 2));
    }
}

console.log(findShortestSegments([-1, -2, 3.5, 0, 0, 2]));
