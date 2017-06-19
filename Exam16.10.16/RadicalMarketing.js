/**
 * Created by Stoyan on 16.6.2017 г..
 */
function register(arr) {
    let users = [];
    for (let line of arr) {
        let lineArr = line.split('-');
        if (lineArr.length == 1) {
            let user = [line[0]];
            let contains = false;
            for (let el of users) {
                if (el.includes(user[0])) {
                    contains = true;
                }
            }
            if (!contains) {
                users.push(user);
            }
        } else {
            let user = lineArr[1];

            let subscriber = lineArr[0];
            let containsUser = false;
            let containsSubscriber = false;
            for (let el of users) {
                if (el[0] == user) {
                    containsUser = true;
                }
                if (el[0] == subscriber) {
                    containsSubscriber = true;
                }
            }

            if (containsUser && containsSubscriber) {
                for (let el of users) {
                    if (el[0] == user) {

                        el.push(subscriber);
                    }
                }
            }
        }

    }
    let maxLength = Number.NEGATIVE_INFINITY;
    for (let user of users) {
        if (user.length > maxLength) {
            maxLength = user.length;
        }
    }
    userWithMaxSubscr = 0;
    for (let user of users)  {
        if (user.length == maxLength) {
            userWithMaxSubscr++;
        }
    }

    if (userWithMaxSubscr > 1) {
        let popularity = new Map();
        for (let e = 0; e < users.length; e++) {
            for (let user of users) {
                for (let i = 1; i < user.length; i++) {
                    if (user[i] == users[e][0]) {
                        if (!popularity.has(users[e][0])) {
                            popularity.set(users[e][0], 1);
                        } else {
                            popularity.set(users[e][0], popularity.get(users[e][0]) + 1)
                        }
                    }
                }
            }
        }
        let maxPopularity = Number.MIN_VALUE;
        for (let [key, value] of popularity) {
            if (value > maxPopularity) {
                maxPopularity = value;

            }
        }
        let countMaxPopularity = 0;
        for (let [key, value] of popularity) {
            if (value == maxPopularity) {
                countMaxPopularity++;
            }
        }
        if (countMaxPopularity > 1) {
            let maxPopularUser = '';
            for (let [key, value] of popularity) {
                if (maxPopularity == value) {
                    maxPopularUser = key;
                    break;
                }
            }
            for (let user of users) {
                if (user[0] == maxPopularUser) {
                    console.log (user[0]);
                    for (let i = 1; i < user.length; i++) {
                        console.log(`${i}. ${user[i]}`);
                    }

                }
            }
        } else {
            for (let user of users) {
                if (user.length == maxLength) {
                    console.log (user[0]);
                    for (let i = 1; i < user.length; i++) {
                        console.log(`${i}. ${user[i]}`);
                    }
                    break;
                }
            }
        }

    } else {
        for (let user of users) {
            if (user.length == maxLength) {
                console.log (user[0]);
                for (let i = 1; i < user.length; i++) {
                    console.log(`${i}. ${user[i]}`);
                }
            }
        }
    }
}

register([
    'A',
    'B',
    'B-A',
    'C',
    'A-B',
    'C-B',
    'C-A'
]);
