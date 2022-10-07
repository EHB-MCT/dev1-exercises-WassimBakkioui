"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawBox();

function drawBox(){
    
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.fillStyle = "#ADD9E6";
    context.beginPath();
    context.rect(50,50,350,350);
    context.rect(50,50,300,300);
    context.rect(100,50,250,250);
    context.rect(150,100,200,200);
    context.rect(150,150,150,150);
    context.fill();
    context.stroke();
}