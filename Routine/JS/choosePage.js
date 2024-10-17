// Function to redirect based on user's choice
function goToPage(page) {
    if (page === 'schedule') {
        window.location.href = "schedule.html";
    } else if (page === 'feedback') {
        window.location.href = "UserFeedbackHistory.html"; 
    }
    else if (page === 'home2') {
        window.location.href = "home2.html"; 
    }
    else if (page === 'logout') {
        // window.location.href = "logout.html"; // Update to  sign out
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('redirectPage');

        // Redirect to login page 
        window.location.href = "../index.html";

    }
}
