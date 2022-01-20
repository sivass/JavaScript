/*
Title       : Inche to Pixel Convertor.
Description : To get pixel width from inches value using JS.
Stack       : JavaScript
Author      : Siva Padmanaban
Contact     : sivass2703@gmail.com
 */
const SYMBOL_PIXEL = "px";
const SYMBOL_INCHE = "in";
const PPI_VALUE = 96;   // value of per pixel inche By w3.org
let inche = 1;
var ppiOutput = "PPI Formula: ";
// PPI Formula
let PPI = inche + SYMBOL_INCHE + " * " + PPI_VALUE + SYMBOL_PIXEL;
// Inche to Pixel Formula
let incheToPixel = inche * PPI_VALUE + SYMBOL_PIXEL;
// Output for ppi & Inches to pixels
console.log(ppiOutput + PPI); // PPI Formula: 1in * 96
console.log(inche + SYMBOL_INCHE + " = " + incheToPixel); // 1in = 96px