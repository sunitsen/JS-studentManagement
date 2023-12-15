/* Date */
var date = new Date();
var currentDay = date.getDate();
var currentMonth = date.getMonth() + 1; // Adding 1 to adjust for zero-based indexing
var currentYear = date.getFullYear();
var currentHours = date.getHours();
var currentMinutes = date.getMinutes();
var currentSeconds = date.getSeconds();

// Create a span element for the full date
const fullDate = document.createElement("span");
fullDate.textContent = " Date:" + " " + currentDay + "/" + currentMonth + "/" + currentYear;

// Select the h1 element inside the element with id "displayDate"
const displayDateElement = document.querySelector("#displayDate h1");

// Append the fullDate span to the displayDate element
displayDateElement.appendChild(fullDate);

// Function to format time
function formatTime(hours, minutes, seconds) {
  return `${'Time: '}${hours}:${minutes}:${seconds}`;
}

// Function to update time in the display
function updateTime() {
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();

  // Create a span element for the time
  const displayTimeElement = document.querySelector("#displayTime h1");
  const fullTime = document.createElement("span");
  fullTime.textContent = formatTime(currentHours, currentMinutes, currentSeconds);

  // Replace the content of the displayTime element
  displayTimeElement.innerHTML = '';
  displayTimeElement.appendChild(fullTime);
}

// Initial update
updateTime();

// Set interval to update time every second
setInterval(updateTime, 1000);
