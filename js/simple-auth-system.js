// auth.js
const users = {
    'student1@example.com': 'password1',
    'student2@example.com': 'password2'
    // Add more users as needed
};

function login(email, password) {
    if (users[email] && users[email] === password) {
        localStorage.setItem('currentUser', email);
        return true;
    }
    return false;
}

function logout() {
    localStorage.removeItem('currentUser');
}

function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

// Check login status on page load
document.addEventListener('DOMContentLoaded', function() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
    }
});
