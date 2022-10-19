"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawBox();

function drawBox(){

    //rect orange

    context.fillStyle = "orange";
    context.beginPath();
    context.rect(50,50,270,190);
    context.fill();

    //rect bleu

    context.fillStyle = "blue";
    context.beginPath();
    context.rect(50,230,270,90);
    context.fill();

    // arc

    context.fillStyle = "yellow"
    context.beginPath();
    context.arc(100,75,50,0,50*Math.PI);
    context.fill();


}