// List of valid usernames and passwords
const validLogins = [
    { username: "NqobaniX124", password: "DevZulu900", redirectPage: "Routine/schedule.html" },
    { username: "stu2", password: "pass2", redirectPage: "Routine/schedule.html" },
    { username: "stu3", password: "pass3", redirectPage: "Routine/schedule.html" },
    { username: "stu4", password: "pass4", redirectPage: "Routine/schedule.html" },
    { username: "Mickey", password: "SEMpofu", redirectPage: "Routine/homepage.html" }
];

// Function to validate login credentials
function validateLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve the entered username and password
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Check if the username and password are valid
    const userLogin = validLogins.find(login => 
        login.username === username && login.password === password
    );

    if (userLogin) {
        // Redirect to the specific page for the logged-in user
        window.location.href = userLogin.redirectPage;

    } else {
        alert("Invalid username or password.");
    }
}
