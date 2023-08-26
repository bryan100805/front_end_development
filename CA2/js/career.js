/*jslint node: true */
"use strict";

//Typing Animation for Headers
var i = 0;
var careerheader = 'Career Options';
var speed = 300;

window.onload = function typeWriter() {
  if (i < careerheader.length) {
    document.getElementById("header3").innerHTML += "<u>" + careerheader.charAt(i) + "</u>";
    i++;
    setTimeout(typeWriter, speed);
  }
};