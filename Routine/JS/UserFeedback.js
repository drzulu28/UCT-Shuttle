function submitFeedback() {
    // Capture input values
    const username = document.getElementById('username').value;
    const course = document.getElementById('course').value;
    const likes = document.getElementById('likes').value;
    const flaws = document.getElementById('flaws').value;

 // Get the selected star rating by checking the checked radio button
 const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : 'No rating';

    const currentDate = new Date(); 
    const formattedDate = currentDate.toLocaleString(); // Formats date and time as a string
 // Create new feedback HTML
    const newFeedbackHTML = `
        <div class="feedback-entry">
            <h2>${username} - ${formattedDate}</h2>
            <h3>Course of study:</h3>
            <p>${course}</p>
            <h3>List two things you really like about the interface:</h3>
            <p>${likes}</p>
            <h3>List at least two key flaws:</h3>
            <p>${flaws}</p>
            <h3>Rating</h3>
            <p>${rating} Stars</p>
            <hr>
        </div>
    `;
    

    // Get existing feedback from localStorage
    let feedbackHTML = localStorage.getItem('feedbackHTML');
    if (!feedbackHTML) {
        feedbackHTML = '';  // If there's no existing feedback, start with an empty string
    }

    // Append new feedback to existing feedback
    feedbackHTML += newFeedbackHTML;

    // Store the updated feedback in localStorage
    localStorage.setItem('feedbackHTML', feedbackHTML);
    
    // Clear the entire localStorage
    // localStorage.clear();

 // Redirect to the thank you page
    window.location.href = "Thankyou.html";

}
