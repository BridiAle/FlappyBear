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
applyGravity();


const tubes = [document.getElementById('tube1'), document.getElementById('tube2'), document.getElementById('tube3'), document.getElementById('tube4')];
const tubenegs = [document.getElementById('tubeneg1'), document.getElementById('tubeneg2'), document.getElementById('tubeneg3'), document.getElementById('tubeneg4')];
let positions = [window.innerWidth / 2, window.innerWidth / 2 + window.innerWidth / 4, window.innerWidth / 2 + window.innerWidth / 4 * 2, window.innerWidth / 2 + window.innerWidth / 4 * 3];

for (var i=0; i<4; i++) {
    tubes[i].style.height = Math.floor(Math.random() * 500 + 50) + 'px';
    tubenegs[i].style.height = (window.innerHeight - parseInt(tubes[i].style.height) - 200) + 'px';
}

function moveTubes() {
    for (var i=0; i<4; i++) {
        positions[i] -= 4;
        tubes[i].style.left = positions[i] + 'px';
        tubenegs[i].style.left = positions[i] + 'px';
        if (positions[i] <= -100) {
            positions[i] = window.innerWidth;
            tubes[i].style.height = Math.floor(Math.random() * 500 + 50) + 'px';
            tubenegs[i].style.height = (window.innerHeight - parseInt(tubes[i].style.height) - 200) + 'px';
        }
    }

    requestAnimationFrame(moveTubes);
}
moveTubes();
