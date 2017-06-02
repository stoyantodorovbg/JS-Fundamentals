/**
 * Created by Stoyan on 1.6.2017 г..
 */
function locateThreasure(coordsOfPoints) {

    islands = [
        {name: 'Tuvalu', x1: 1, x2: 3, y1: 1, y2: 3},
        {name: 'Tonga', x1: 0, x2: 2, y1: 6, y2: 8},
        {name: 'Samoa', x1: 5, x2: 7, y1: 3, y2: 6},
        {name: 'Tokelau', x1: 8, x2: 9, y1: 0, y2: 1},
        {name: 'Cook', x1: 4, x2: 9, y1: 7, y2: 8},
    ];


    for (let i = 0; i < coordsOfPoints.length - 1; i += 2) {
        console.log(isInIsland(islands, coordsOfPoints[i], coordsOfPoints[i + 1]));
    }

    function isInIsland(islands, x, y) {
        "use strict";
        for (let i = 0; i < islands.length; i++)
        {
            let inIsland = false;
            if ((x >= islands[i].x1 && x <= islands[i].x2) &&
                (y >= islands[i].y1 && y <= islands[i].y2)) {

                inIsland = true;
            }

            if (inIsland) {
                return islands[i].name;
            }
        }
        return 'On the bottom of the ocean';
    }
}

locateThreasure([4, 2, 1.5, 6.5, 1, 3]);
