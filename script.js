 document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');
    
    // Get all error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    // Function to validate individual field
    function validateField(field, errorElement, fieldName) {
        const value = field.value.trim();
        
        if (value === '') {
            errorElement.textContent = `${fieldName} is required`;
            field.style.borderColor = '#e74c3c';
            return false;
        } else {
            errorElement.textContent = '';
            field.style.borderColor = '#2ecc71';
            return true;
        }
    }
    
    // Real-time validation as user types
    document.getElementById('name').addEventListener('input', function() {
        validateField(this, nameError, 'Name');
    });
    
    document.getElementById('email').addEventListener('input', function() {
        validateField(this, emailError, 'Email');
    });
    
    document.getElementById('password').addEventListener('input', function() {
        validateField(this, passwordError, 'Password');
    });
    
    // Form submission handler
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form fields
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const passwordField = document.getElementById('password');
        
        // Validate all fields
        const isNameValid = validateField(nameField, nameError, 'Name');
        const isEmailValid = validateField(emailField, emailError, 'Email');
        const isPasswordValid = validateField(passwordField, passwordError, 'Password');
        
        // If all fields are valid, show success message
        if (isNameValid && isEmailValid && isPasswordValid) {
            // Hide the form
            form.style.display = 'none';
            
            // Show success message
            successMessage.classList.remove('hidden');
            
            // Optional: Reset form after 3 seconds and show form again
            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                successMessage.classList.add('hidden');
                
                // Reset border colors
                nameField.style.borderColor = '#e1e1e1';
                emailField.style.borderColor = '#e1e1e1';
                passwordField.style.borderColor = '#e1e1e1';
            }, 3000);
        }
    });
});
