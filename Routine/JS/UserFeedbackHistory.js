// Load and display feedback history from Firestore
async function displayFeedbackHistory() {
    const feedbackHistoryElement = document.getElementById('feedbackHistory');

    try {
        // Reference to the feedback collection
        const feedbackRef = db.collection('feedback');

        // Get the feedback data
        const feedbackSnapshot = await feedbackRef.get();

        if (!feedbackSnapshot.empty) {
            let feedbackHTML = '';
            feedbackSnapshot.forEach((doc) => {
                const feedbackData = doc.data();
                feedbackHTML += `<p>${feedbackData.message}</p>`; // Adjust based on your data structure
            });
            feedbackHistoryElement.innerHTML = feedbackHTML;
        } else {
            feedbackHistoryElement.innerHTML = '<h2>No feedback available yet.</h2>';
        }
    } catch (error) {
        console.error("Error retrieving feedback history: ", error);
        feedbackHistoryElement.innerHTML = '<h2>Error loading feedback.</h2>';
    }
}

// Call the function to display feedback on page load
window.onload = displayFeedbackHistory;


// Logout function to redirect to sign-in page
function logout() {
    window.location.href = "../index.html";
}
