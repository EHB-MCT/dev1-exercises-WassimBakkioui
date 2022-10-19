"use strict"

/**
@type {CanvasRenderingContext}
 */

let context;

setupContext();

export default context;

function setupContext(){
    let canvas = document.querySelector('canvas');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    context = canvas.getContext ("2d");
}