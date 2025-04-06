document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');
    
    if (togglePassword && passwordField) {
        // Show eye icon only when there's input
        passwordField.addEventListener('input', function() {
            if (this.value.length > 0) {
                togglePassword.style.display = 'block';
            } else {
                togglePassword.style.display = 'none';
            }
        });
        
        // Toggle password visibility
        togglePassword.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Check current password field type
            const isCurrentlyPassword = passwordField.getAttribute('type') === 'password';
            
            // Toggle password field type
            passwordField.setAttribute('type', isCurrentlyPassword ? 'text' : 'password');
            
            // If showing password (type=text), use eye-slash icon
            // If hiding password (type=password), use eye icon
            if (isCurrentlyPassword) {
                // Now showing password, so use the eye-slash icon
                this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
            } else {
                // Now hiding password, so use the eye icon
                this.innerHTML = '<i class="fa-solid fa-eye"></i>';
            }
        });
    }
});