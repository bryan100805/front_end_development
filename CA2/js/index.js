/*jslint node: true */
"use strict";

//Typing Animation for Headers
var i = 0;
var indexheader = 'About Me';
var speed = 300;

window.onload = function typeWriter() {
  if (i < indexheader.length) {
    document.getElementById("header1").innerHTML += "<u>" + indexheader.charAt(i) + "</u>";
    i++;
    setTimeout(typeWriter, speed);
  }
};