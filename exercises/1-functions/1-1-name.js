"use strict";

drawLine();

function drawLine(){
    let canvas=document.querySelector("canvas");
    canvas.widht=window.innerWidth;
    canvas.height=window.innerHeight;
    let context=canvas.getContext("2d");

    context.lineWidth=3;
    context.strokeStyle='black';
    context.beginPath();
    context.moveTo(25,50);
    context.lineTo(40,250);
    context.lineTo(50,150);
    context.lineTo(60,250);
    context.lineTo(75,50);
    context.stroke();

    context.lineWidth=3;
    context.strokeStyle='black';
    context.beginPath();
    context.moveTo(90,50);
    context.lineTo(75,250);
    context.lineTo(82,150);
    context.lineTo(100,150);
    context.lineTo(90,50);
    context.lineTo(110,250);
    context.stroke();

    context.lineWidth=3;
    context.strokeStyle='red';
    context.beginPath();
    context.moveTo(160,120);
    context.lineTo(160,70);
    context.lineTo(145,50);
    context.lineTo(129,70);
    context.lineTo(130,150);
    context.lineTo(160,160);
    context.lineTo(160,225);
    context.lineTo(145,250);
    context.lineTo(130,220);
    context.stroke();

    context.lineWidth=3;
    context.strokeStyle='yellow';
    context.beginPath();
    context.moveTo(160,120);
    context.lineTo(160,70);
    context.lineTo(145,50);
    context.lineTo(129,70);
    context.lineTo(130,150);
    context.lineTo(160,160);
    context.lineTo(160,225);
    context.lineTo(145,250);
    context.lineTo(130,220);
    context.stroke();

    context.lineWidth=3;
    context.strokeStyle='yellow';
    context.beginPath();
    context.moveTo(209,120);
    context.lineTo(209,70);
    context.lineTo(195,50);
    context.lineTo(178,70);
    context.lineTo(178,150);
    context.lineTo(210,160);
    context.lineTo(210,225);
    context.lineTo(194,250);
    context.lineTo(178,220);
    context.stroke();

    context.lineWidth=3;
    context.strokeStyle='red';
    context.beginPath();
    context.moveTo(230,50);
    context.lineTo(230,250);
    context.stroke();

    context.lineWidth=3;
    context.strokeStyle='red';
    context.beginPath();
    context.moveTo(260,250);
    context.lineTo(260,50);
    context.lineTo(280,250);
    context.lineTo(295,50);
    context.lineTo(295,250);
    context.stroke();
}