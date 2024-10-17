// Modify this section based on the existing logic
const validLogins = [
    { username: "NqobaniX124", password: "DevZulu900", redirectPage: "Routine/homepage2.html" },
    { username: "stu2", password: "pass2", redirectPage: "Routine/homepage2.html" },
    { username: "stu3", password: "pass3", redirectPage: "Routine/homepage2.html" },
    { username: "stu4", password: "pass4", redirectPage: "Routine/homepage2.html" },
    { username: "Mickey", password: "SEMpofu", redirectPage: "Routine/homepage.html" }
];

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password match any of the valid logins
    const user = validLogins.find(user => user.username === username && user.password === password);

    if (user) {
        // Save username and redirect page to localStorage
        localStorage.setItem('loggedInUser', username);
        localStorage.setItem('redirectPage', user.redirectPage);
        // Redirect to the appropriate page after successful login
        window.location.href = user.redirectPage;  

    } else {
        alert('Invalid username or password!');
    }
}


// Validate form input before submitting
function validateLogin(event) {
    event.preventDefault();  // Prevent the default form submission
    login();  // Call the login function
}

// Function to display a welcome message
function displayWelcomeMessage(username) {
// redirect to 'hompepage2.html'
    window.location.href = "Routine/homepage2.html";
}

// Cancel login and clear input fields
function cancelLogin() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// Function to check login status on page load (optional for persistence)
function checkLoginStatus() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        displayWelcomeMessage(loggedInUser);
    }
}

// Call to check login status on page load
checkLoginStatus();
