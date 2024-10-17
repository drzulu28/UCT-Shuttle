(function autoLogout() {
    // Remove user session data
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('redirectPage');

    // Redirect to the login page
    window.location.href = "../SignIn.html"; 
    history.pushState(null, null, user.redirectPage);  // Disable back button

})();