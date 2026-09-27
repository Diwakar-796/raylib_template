const r = require("raylib");

const WIDTH = 500;
const HEIGHT = 400;
const FPS = 60;

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Title");
    r.SetTargetFPS(FPS);
}

function update() { }

function draw() { }

function running() {
    return !r.WindowShouldClose();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};