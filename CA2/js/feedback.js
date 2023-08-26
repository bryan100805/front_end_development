/*jslint node: true */
"use strict";

//Typing Animation for Headers
var i = 0;
var feedbackheader = 'Feedback';
var speed = 300;

window.onload = function typeWriter() {
  if (i < feedbackheader.length) {
    document.getElementById("header4").innerHTML += "<u>" + feedbackheader.charAt(i) + "</u>";
    i++;
    setTimeout(typeWriter, speed);
  }
};

//Interactive Feature in Feedback Form Textbox
function createTextArea(){
  var textArea = '<label class="form-label" for="commBox">Please Elaborate Below</label>';
  textArea += '<textarea aria-describedby="elaborateInline" class="form-control" name="visitorExp" id="commBox" placeholder="Please elaborate on the issue." maxlength="350"></textarea>';
  textArea += '<div id="elaborateInline" class="form-text">(max-characters: 350)</div>';
  return textArea;
}

//Display Textbox in Feedback Form to Interact With Visitors
document.getElementById("text_area").innerHTML = createTextArea();