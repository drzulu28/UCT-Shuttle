// Load and display feedback history
function displayFeedbackHistory() {
    const feedbackHTML = localStorage.getItem('feedbackHTML');
    if (feedbackHTML) {
        document.getElementById('feedbackHistory').innerHTML = feedbackHTML;
    } else {
        document.getElementById('feedbackHistory').innerHTML = '<h2>No feedback available yet.</h2>';
    }
}

// Call the function to display feedback on page load
window.onload = displayFeedbackHistory;

// Logout function to redirect to sign-in page
function logout() {
    window.location.href = "../index.html";
}

