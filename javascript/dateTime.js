// date 
var date = new Date();
var currentDate = date.getDate();
var currentMonth = date.getMonth();
var currentYear = date.getFullYear();
var dayOfWeekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayName = dayOfWeekNames[date.getDay()];
const todayFullDate = document.querySelectorAll("#displayDate h1 span")[0]
todayFullDate.innerHTML = `${currentDate} . ${currentMonth} . ${currentYear} . ${dayName}`

export function updateConsoleTime() {
  const todayFullDate = document.querySelector("#displayTime h1 span");
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  // Determine the period (AM/PM)
  var period = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Format the time with leading zeros
  var formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${period}`;
  todayFullDate.innerHTML = formattedTime;
}

// Initial display
 updateConsoleTime();

// Update every second
setInterval(updateConsoleTime, 1000);



















// // Add an event listener to the search input for dynamic search
// const searchInput = document.getElementById("searchInput");
// searchInput.addEventListener("keyup", () => {
//   performSearch();
// });

// // Perform the search
// const performSearch = () => {
//   // Retrieve the search input value
//   const searchInputValue = searchInput.value.trim().toLowerCase();

//   try {
//     // Retrieve the user data from local storage
//     const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

//     // Perform the search
//     const searchResults = existingUsers.filter(user => {
//       return (
//         user.firstName.toLowerCase().includes(searchInputValue) ||
//         user.lastName.toLowerCase().includes(searchInputValue) ||
//         user.state.toLowerCase().includes(searchInputValue)
//       );
//     });

//     // Display the search results
//     displayUserData(searchResults);
//   } catch (error) {
//     console.error('Error parsing JSON:', error);
//   }
// };

// // Add an event listener to clear the search results when the search input is cleared
// searchInput.addEventListener("input", () => {
//   if (searchInput.value.trim() === '') {
//     resetSearchResults();
//   }
// });
