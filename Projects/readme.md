# JavaScript Algorithms and Data Structures

# Project : Inche to Pixel Convertor
# Learn : Basic JS var, let, and const property type syntax

## Step 1: 
Using const variable property (ES6) to assign default value or name of the project inputs, its can't be changed once declare.

const PPI_VALUE = 96;   // value of per pixel inche for web follow by w3.org https://www.w3.org/TR/css3-values/#absolute-lengths

const PPI_VALUE = 106; // if you declare again you will get error like this SyntaxError: Identifier 'PPI_VALUE' has already been declared

## Step 2: 
Using let variable property (ES6), instead of using var, let help to avoid repeat declaration and it can't be overwrite.
let inche = 1;
let inche = 11; // if you decalre again console will give error like this Identifier 'inche' has already been declared

## Step 3
Using var property variable
var ppiOutput = "PPI Formula: ";
var ppiOutput = "PPI value : "; // it will be overwrite of the ppiOutput variable and display last overwrite value.

## Step 4: 
PPI Formula && Inche to Pixel Formula
let PPI = inche + SYMBOL_INCHE + " * " + PPI_VALUE;
let incheToPixel = inche * PPI_VALUE + SYMBOL_PIXEL;

## Step 5: 
Output for ppi &&  Inches to pixels
console.log(ppiOutput + PPI); // PPI Formula: 1in * 96
console.log(inche + SYMBOL_INCHE + " = " + incheToPixel); // 1in = 96px