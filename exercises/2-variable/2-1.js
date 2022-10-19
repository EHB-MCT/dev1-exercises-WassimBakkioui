"use strict";

let canvas=document.querySelector("canvas");
canvas.widht=window.innerWidth;
canvas.height=window.innerHeight;
let context=canvas.getContext("2d");

let margin = 50;
let width = context.canvas.width;
let height = context.canvas.height;

drawLine();

function drawLine(x,y){
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(margin,50);
    context.lineTo(width-margin,50);
    context.lineTo(margin,100);
    context.lineTo(width-margin,100);
    context.lineTo(margin,150);
    context.lineTo(width-margin,150);
    context.lineTo(margin,200);
    context.lineTo(width-margin,200);
    context.lineTo(margin,250);
    context.lineTo(width-margin,250);
    context.lineTo(margin,300);
    context.lineTo(width-margin,300);
    context.lineTo(margin,50);
    context.stroke(); 
}
    