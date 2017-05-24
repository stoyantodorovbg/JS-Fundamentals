/**
 * Created by Stoyan on 23.5.2017 г..
 */
function findConeVolumeAndSurface(radius, height) {
    let volume = (Math.PI * radius * radius * height) / 3;
    console.log(`volume = ${volume.toFixed(4)}`);

    let sideHeight = Math.sqrt((radius * radius) + (height * height));
    let surface = Math.PI * radius * (radius + sideHeight);
    console.log(`area = ${surface.toFixed(4)}`);
}

