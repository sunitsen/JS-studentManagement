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
