/**
 * Created by Stoyan on 13.6.2017 г..
 */
function calculateStatistic (arr) {
    "use strict";
    let landed = [];
    let departed = [];
    let towns = [];

    let remaining = [];

    let arrivals = new Map();
    let departings = new Map();

    for (let row of arr) {
        let [planeID, town, passengersCount, action] = row.split(' ');
        passengersCount = Number(passengersCount);

        if (action == 'land' && !landed.includes(planeID)) {
            landed.push(planeID);
            if (!remaining.includes(planeID)) {
                remaining.push(planeID);
            }
            if (!arrivals.has(town)) {
                arrivals.set(town, passengersCount);
            } else {
                arrivals.set(town, arrivals.get(town) + passengersCount);
            }
            towns = addPlaneToTown(towns, town, planeID);
        }
        if (action == 'depart' && landed.includes(planeID)) {
            departed.push(planeID);
            landed.pop(planeID);
            remaining.pop(planeID);

            if (!departings.has(town)) {
                departings.set(town, passengersCount);
            } else {
                departings.set(town, departings.get(town) + passengersCount);
            }
            towns = addPlaneToTown(towns, town, planeID);
        }

        function addPlaneToTown (towns, town, planeID) {
            let townPlane = [town, planeID];
            let newTown = true;
            if (towns.length > 0) {
                for (let item of towns) {
                    if (item[0] == town) {
                        newTown = false;
                    }
                    if (!newTown && !item.includes(planeID)) {
                        item.push(planeID);
                    }
                }
            }
            if (newTown) {
                towns.push(townPlane);
            }
            return (towns);
        }
    }
    remaining.sort((a, b) => a.localeCompare(b));

    console.log('Planes left:');
    for (let plane of remaining) {
        console.log(`- ${plane}`);
    }

    for (let [key, value] of departings) {
        if (!arrivals.has(key)) {
            arrivals.set(key, 0);
        }
    }

    arrivals = [...arrivals]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));




    for (let [key, value] of arrivals) {
        console.log(key);
        console.log(`Arrivals: ${value}`);
        if (departings.has(key)) {
            console.log(`Departures: ${departings.get(key)}`);
        } else {
            console.log(`Departures: ${0}`);
        }
        console.log('Planes:');

        for (let town of towns) {
            if (town[0] == key) {
                town.splice(0, 1);
                town.sort((a, b) => a.localeCompare(b));
                for (let i = 0; i < town.length; i++) {
                    console.log(`-- ${town[i]}`);
                }
            }
        }

    }
}

calculateStatistic([
    'RTA72 London -10 land',
    'RTA#72 Brussels -110 depart',
    'RTA7!2 Warshaw 350 land',
    'RTA72 Riga -201 depart',
    'rta72 riga -13 land',
    'rta Riga -200 depart'
]);
