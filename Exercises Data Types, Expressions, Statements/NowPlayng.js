/**
 * Created by Stoyan on 24.5.2017 г..
 */
function info (args) {
    let track = args[0];
    let artist = args[1];
    let duration = args[2]

    return `Now Playing: ${artist} - ${track} [${duration}]`;
}

console.log(info(['Number One', 'Nelly', '4:09']))
