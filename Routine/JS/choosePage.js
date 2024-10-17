// Function to redirect based on user's choice
function goToPage(page) {
    if (page === 'schedule') {
        window.location.href = "schedule.html"; // Update with actual URL for schedule page
    } else if (page === 'feedback') {
        window.location.href = "UserFeedbackHistory.html"; // Update with actual URL for feedback page
    }
    else if (page === 'home2') {
        window.location.href = "home2.html"; // Update with actual URL for home2 page
    }
    else if (page === 'logout') {
        // window.location.href = "logout.html"; // Update to  sign out
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('redirectPage');

        // Redirect to login page (e.g., index.html)
        window.location.href = "../index.html";  // Replace with the actual login page

    }
}
