"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    let x = 50;
    let y = x;
    let step = 25;
    while (i <= 6) {
        Utils.drawLine(x + step * i,200 + step * i,200 + step * i,y + step * i);
        Utils.drawLine(200 - step * i,y + step * i,350 - step * i,200 + step * i);
        i++;
    }
}