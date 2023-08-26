/*jslint node: true */
"use strict";

//Typing Animation for Headers (Uses array method, journeyheader.length)
var i = 0;
var journeyheader = ["M","y"," ","J","o","u","r","n","e","y"," ","I","n"," ","S","P"];
var speed = 300;

window.onload = function typeWriter() {
  if (i < journeyheader.length) {
    document.getElementById("header2").innerHTML += "<u>" + journeyheader[i] + "</u>";
    i++;
    setTimeout(typeWriter, speed);
  }
};

/*Display the time left until End of Sem 1*/
document.getElementById("dateNow").innerHTML = "m/d/y<br/>h:m:s";

/*Function to create and start the countdown*/
function startCountDown(){

  /*Store the current date and time*/
  var currentDay = new Date();
  var dateStr = currentDay.toLocaleDateString();
  var timeStr = currentDay.toLocaleTimeString();

  /*Display the current date and time*/
  document.getElementById("dateNow").innerHTML = "<b>" + dateStr + "<br/>" + timeStr + "</b>";

  /*Calculate the days until End of Sem 1*/
  var endOfSem1 = new Date("September 3, 2022");
  var daysLeft = (endOfSem1 - currentDay)/(1000*60*60*24);

  /*Calculate the hours left in the current day*/
  var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

  /*Calculate the minutes and seconds left in the current hour*/
  var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
  var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

  /*Display the time left until End of Sem 1*/
  document.getElementById("days").textContent = Math.floor(daysLeft) + " ";
  document.getElementById("hrs").textContent = Math.floor(hrsLeft) + " ";
  document.getElementById("mins").textContent = Math.floor(minsLeft) + " ";
  document.getElementById("secs").textContent = Math.floor(secsLeft) + " ";
}

/*Execute the function to run and display the countdown*/
startCountDown();
setInterval("startCountDown()", 1000);



/*Set the date displayed in the calendar*/
var thisDay = new Date();

/*Events in Assignment and Examination Timetable*/
var daySchedule = new Array(34);

daySchedule[1] = "<br/><b>FOP Stage 2 Submission</b><br/><u>8:00am</u><br/><b>CPR Presentation</b><br/><u>1:45pm</u>";
daySchedule[2] = "<br/><b>FOP CA2 Interview</b><br/><u>12:00pm</u>";
daySchedule[3] = "<br/><b>DSTA Scholarship Interview</b><br/><u>8:30am</u>";
daySchedule[4] = "";
daySchedule[5] = "";
daySchedule[6] = "";
daySchedule[7] = "";

daySchedule[8] = "<br/><b>FED CA2 Submission</b><br/><u>9:00am</u>";
daySchedule[9] = "";
daySchedule[10] = "<br/><b>FED CA2 Interview</b><br/><u>12:30pm</u>";
daySchedule[11] = "<br/><b>CAT Presentation</b><br/><u>2:30pm</u>";
daySchedule[12] = "<br/><b>FOC Assignment Submission</b><br/><u>11:59pm</u>";
daySchedule[13] = "";
daySchedule[14] = "";

daySchedule[15] = "";
daySchedule[16] = "<br/><b>FOC Interview</b><br/><u>9:00am</u>";
daySchedule[17] = "";
daySchedule[18] = "";
daySchedule[19] = "";
daySchedule[20] = "<br/><b>Math Revision</b><br/><u>9:00am</u>";
daySchedule[21] = "<br/><b>Math Revision</b><br/><u>9:00am</u>";

daySchedule[22] = "<br/><b>Math EST</b><br/><u>4:00pm</u><br/><b>Math PeerWise Assignment</b><br/><u>11:59pm</u>";
daySchedule[23] = "";
daySchedule[24] = "";
daySchedule[25] = "";
daySchedule[26] = "";
daySchedule[27] = "";
daySchedule[28] = "";

daySchedule[29] = "";
daySchedule[30] = "";
daySchedule[31] = "";

/*Write table row for weekdays*/
function calculateWeekday() {
  var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var rowHTML = "<tr>";
  for (var i = 0; i < dayName.length; i++) {
    rowHTML += "<th id='timetable_weekdays' class='lead text-center mx-2 thead-light'>" + dayName[i] + "</th>";
  }
  rowHTML += "</tr>";
  return rowHTML;
}

/*Calculate the number of days in the month*/
function daysInMonth(calDate){
  var dateName = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var thisYear = calDate.getFullYear();
  var thisMonth = calDate.getMonth();
  //Calculate the days in February for leap years
  if (thisYear % 4 === 0){
    if ((thisYear % 100 != 0) || (thisYear % 400 === 0)){
      dateName[1] = 29;
    }
  }
  return dateName[thisMonth];
}

/*Write table rows for each day of the month */
function calculateDays(calDate) {
  var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
  var weekDay = day.getDay();
  var htmlCode = "<tr>";
  for (var i = 0; i < weekDay; i++){
     htmlCode += "<td class= 'border border-dark'></td>";
  }
  var totalDays = daysInMonth(calDate);
  var today = calDate.getDate();
  for (var i = 1; i <= totalDays; i++) {
    day.setDate(i);
    weekDay = day.getDay();
    if (weekDay === 0) htmlCode += "<tr>";
    if (i === today) {
      htmlCode += "<td id='schedule_today' class='schedule_dates text-left align-top'>" + i + daySchedule[i] + "</td>";
    } 
    else {
      htmlCode += "<td class='schedule_dates text-left align-top'>" + i + daySchedule[i] + "</td>";
    }
    if (weekDay === 6) htmlCode += "</tr>";
  }
  return htmlCode;
}

/*Write the timetable caption*/
function calCaption(calDate) {
  var monthName = ["January", "February", "March", "April",
                   "May", "June", "July", "August", "September",
                   "October", "November", "December"];
  var thisMonth = calDate.getMonth();
  var thisYear = calDate.getFullYear();
  return "<caption class='caption-top text-center'>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

/*Generate the timetable*/
function createTimetable(calDate){
  var timetableHTML = "<table class='px-2 py-2 table table-bordered border border-dark' id='schedule'>";
  timetableHTML += calCaption(calDate);
  timetableHTML += calculateWeekday();
  timetableHTML += calculateDays(calDate);
  timetableHTML += "</table>";
  return timetableHTML;
}

/*Write the timetable to the id 'timetable'*/
document.getElementById("timetable").innerHTML = createTimetable(thisDay);