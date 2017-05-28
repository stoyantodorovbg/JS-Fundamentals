/**
 * Created by Stoyan on 24.5.2017 г..
 */
function composeHTML (args) {
    let location = args[0];
    let alternate = args[1];

    return `<img src="${location}" alt="${alternate}">`;
}

console.log(composeHTML(['smiley.gif', 'Smiley Face']))
