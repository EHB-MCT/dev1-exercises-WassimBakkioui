"use strict";

drawLine();

function drawLine(){
    let canvas=document.querySelector("canvas");
    canvas.widht=window.innerWidth;
    canvas.height=window.innerHeight;
    let context=canvas.getContext("2d");

    context.lineWidth=3;
    context.strokeStyle="black";
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(50,200);
    context.lineTo(110,200);
    context.lineTo(110,50);
    context.lineTo(50,50);
    context.stroke();

    context.lineWidth=3;
    context.strokeStyle="red";
    context.beginPath();
    context.moveTo(52,51);
    context.lineTo(108,198)
    context.stroke();

    context.lineWidth=3;
    context.strokeStyle="red";
    context.beginPath();
    context.moveTo(108,51);
    context.lineTo(52,199);
    context.stroke();
}