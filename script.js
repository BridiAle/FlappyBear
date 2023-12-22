let speed = 3;
let gravity = 0.5;

let bear = document.getElementById("bear");
let bear_props = bear.getBoundingClientRect();

let bear_dy = 0;

document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp" || e.key == " ") {
        bear_dy = -10;
    }
});

function applyGravity() {
    bear_dy = bear_dy + gravity;
    bear.style.top = bear_props.top + bear_dy + "px";
    bear_props = bear.getBoundingClientRect();

    if (bear_props.y < -30 || bear_props.y > 832) {
        return;
    }

    requestAnimationFrame(applyGravity);
}
requestAnimationFrame(applyGravity);
