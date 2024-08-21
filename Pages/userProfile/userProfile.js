document.addEventListener('DOMContentLoaded', () => {
    // Function to populate user profile data
    const populateUserProfile = () => {
        const loggedIn = localStorage.getItem('loggedIn');
        const userName = localStorage.getItem('userName');
        const users = JSON.parse(localStorage.getItem('users'));

        if (loggedIn === 'true' && userName && users) {
            const userEmail = `${userName}@example.com`; // Assuming email structure
            const user = users[userEmail];

            if (user) {
                // Populate profile header
                document.querySelector('.profile-header h2').textContent = user.fullName || 'John Doe';
                document.querySelector('.profile-header p').textContent = userEmail;

                // Populate personal information form
                document.getElementById('fullName').value = user.fullName || 'John Doe';
                document.getElementById('email').value = userEmail;
                document.getElementById('phone').value = user.phone || '+1 234 567 890';
                document.getElementById('dob').value = user.dob || '1990-01-01';
            }
        } else {
            // Redirect to login if not logged in
            window.location.href = "../../login.html";
        }
    };

    // Function to handle logout
    const handleLogout = () => {
        localStorage.setItem('loggedIn', 'false');
        localStorage.removeItem('userName');
        window.location.href = "../../login.html"; // Redirect to login page
    };

    
    // Populate user profile on page load
    populateUserProfile();

    // Attach logout function to the logout button
    document.querySelector('.btn-danger').addEventListener('click', handleLogout);
});
