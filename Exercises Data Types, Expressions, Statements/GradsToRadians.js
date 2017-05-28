/**
 * Created by Stoyan on 24.5.2017 г..
 */
function convert (grads) {
    grads %= 400;
    grads = grads < 0 ? grads += 400 : grads;
    grads *= 360 / 400;

    return grads
}
console.log(convert(-50));
