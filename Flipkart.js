document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear previous error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get form values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let valid = true;

    // Validate email
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email or mobile number.';
        valid = false;
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        valid = false;
    }

    if (valid) {
        alert('Login successful!');
        // You can add further login logic here, such as sending data to a server
    }
});

function validateEmail(email) {
    // Simple email validation regex
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}