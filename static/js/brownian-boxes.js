"use strict";

// canvas setup
let canvas = document.getElementById("brownian-boxes");

const dpr = window.devicePixelRatio || 1;
const displayWidth = 800;
const displayHeight = 600;

// Set internal pixel resolution
canvas.width = displayWidth * dpr;
canvas.height = displayHeight * dpr;

// Set visual CSS size
canvas.style.width = `${displayWidth}px`;
canvas.style.height = `${displayHeight}px`;

let ctx = canvas.getContext("2d");
ctx.scale(dpr, dpr);

// canvas operations

//ctx.arc(100, 35, 35, 0, 2 * Math.PI);

import { twoDimParticle, sleep, runSim} from './mj_math.js';

const p1 = new twoDimParticle(100, 100, 10);

// simulation

window.setTimeout(runSim, 24, ctx, canvas, p1);






