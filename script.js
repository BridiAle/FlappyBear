const speed = 3;
const gravity = 0.3;
const jump = -10;

let bear = document.getElementById("bear");
let bear_props = bear.getBoundingClientRect();

let bear_dy = 0;

document.addEventListener("keydown", (e) => {
    if (document.getElementById("start").style.display != "none") {
        document.getElementById("start").style.display = "none";
        startGame();
    } else if (e.key == "ArrowUp" || e.key == " ") {
        bear_dy = jump;
    }
});

document.getElementById("start").addEventListener("click", () => {
    document.getElementById("start").style.display = "none";
    startGame();
});

function applyGravity() {
    bear_dy = bear_dy + gravity;
    bear.style.top = bear_props.top + bear_dy + "px";
    bear_props = bear.getBoundingClientRect();

    if (
        bear_props.y < -28 ||
        bear_props.y > window.innerHeight - bear_props.height + 38
    ) {
        return;
    }

    requestAnimationFrame(applyGravity);
}

const tubes = [
    document.getElementById("tube1"),
    document.getElementById("tube2"),
    document.getElementById("tube3"),
    document.getElementById("tube4"),
];
const tubenegs = [
    document.getElementById("tubeneg1"),
    document.getElementById("tubeneg2"),
    document.getElementById("tubeneg3"),
    document.getElementById("tubeneg4"),
];
let positions = [
    window.innerWidth / 2,
    window.innerWidth / 2 + window.innerWidth / 4,
    window.innerWidth / 2 + (window.innerWidth / 4) * 2,
    window.innerWidth / 2 + (window.innerWidth / 4) * 3,
];

for (var i = 0; i < 4; i++) {
    tubes[i].style.height = Math.floor(Math.random() * 500 + 50) + "px";
    tubenegs[i].style.height =
        window.innerHeight - parseInt(tubes[i].style.height) - 200 + "px";
}

function moveTubes() {
    for (var i = 0; i < 4; i++) {
        positions[i] -= speed;
        tubes[i].style.left = positions[i] + "px";
        tubenegs[i].style.left = positions[i] + "px";
        if (positions[i] <= -100) {
            positions[i] = window.innerWidth;
            tubes[i].style.height = Math.floor(Math.random() * 500 + 50) + "px";
            tubenegs[i].style.height =
                window.innerHeight -
                parseInt(tubes[i].style.height) -
                200 +
                "px";
        }
    }

    requestAnimationFrame(moveTubes);
}

function startGame() {
    applyGravity();
    moveTubes();
}
