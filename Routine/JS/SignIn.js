// List of valid usernames and passwords
const validLogins = [
    { username: "NqobaniX124", password: "DevZulu900" },
    { username: "stu2", password: "pass2" },
    { username: "stu3", password: "pass3" },
    { username: "stu4", password: "pass4" },
    { username: "stu5", password: "pass5" }
];

// Function to validate login credentials
function validateLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve the entered username and password
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Check if the username and password are valid
    const isValid = validLogins.some(login => 
        login.username === username && login.password === password
    );

    if (isValid) {
        // Redirect to the schedule page on successful login
        window.location.href = "Routine/schedule.html"; // Update with your actual URL
    } else {
        alert("Invalid username or password.");
    }
}
