const userIdentityForm = document.getElementById("userIdentity");
const firstName = userIdentityForm.querySelector('#firstName');
const lastName = userIdentityForm.querySelector('#lastName');
const state = userIdentityForm.querySelector('#state');
let userIdCounter = 1;




// Form submitted
userIdentityForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const user = {
    id: userIdCounter++,
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    state: state.value.trim(),
  };

  if (formValidation(user)) {
    storeUserData(user);
    clearFormFields();
  } else {
    console.log("Form is not valid, and it will not be submitted");
  }
});


// Clear input fields
const clearFormFields = () => {
  firstName.value = '';
  lastName.value = '';
  state.value = '';
};




// For validation
const formValidation = (user) => {
  let isValid = true;
  const fields = ["firstName", "lastName", "state"];

  fields.forEach(field => {
    const fieldValue = user[field];
    const errorElement = document.getElementById(`${field}Error`);

    if (!fieldValue) {
      isValid = false;
      errorElement.textContent = `${field} is empty`;
    } else {
      errorElement.textContent = '';
    }
  });

  return isValid;
};






// Store data
const storeUserData = (user) => {
  try {
    // Retrieve existing users from local storage or initialize an empty array
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user to the array
    existingUsers.push(user);

    // Update local storage with the modified user array
    localStorage.setItem('users', JSON.stringify(existingUsers));

    console.log('User data stored:', user);
    console.log('Updated user list in local storage:', existingUsers);

    // Display the updated data in the table
    displayUserData(existingUsers);

  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
};





// Window load
document.addEventListener('DOMContentLoaded', () => {
  showStoredData();
});





// Show stored data
const showStoredData = () => {
  try {
    // Retrieve the user data from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    console.log('User data stored:', existingUsers);
  
    // Display user data in the table
    displayUserData(existingUsers);

  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
};





// Display user data
const displayUserData = (users) => {
  const list = document.querySelector("#student-list");
  list.innerHTML = ''; // Clear the existing content of the table

  users.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <th scope="row">${index + 1}</th>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.state}</td>
      <td>
        <button type="button" class="btn btn-warning btn-sm">Edit</button>
      </td>
      <td>
        <button type="button" class="btn btn-danger btn-sm">Delete</button>
      </td>
    `;
     
    list.appendChild(row);


  });
};





// Add an event listener to the search input for dynamic search
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", () => {
  performSearch();
});

// Perform the search
const performSearch = () => {
  // Retrieve the search input value
  const searchInputValue = searchInput.value.trim().toLowerCase();

  try {
    // Retrieve the user data from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Perform the search
    const searchResults = existingUsers.filter(user => {
      return (
        user.firstName.toLowerCase().includes(searchInputValue) ||
        user.lastName.toLowerCase().includes(searchInputValue) ||
        user.state.toLowerCase().includes(searchInputValue)
      );
    });

    // Display the search results or show a message if no data is found
    const list = document.querySelector("#student-list");
    list.innerHTML = ''; // Clear the existing content of the table

    if (searchResults.length > 0) {
      displayUserData(searchResults);
    } else {
      const noDataFoundRow = document.createElement("tr");
      noDataFoundRow.innerHTML = `
        <td colspan="6" class="text-center">No data available.</td>
      `;
      list.appendChild(noDataFoundRow);
    }
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
};


// Add an event listener to clear the search results when the search input is cleared
searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() === '') {
    resetSearchResults();
  }
});
