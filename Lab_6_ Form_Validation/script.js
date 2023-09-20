    
    const form = document.getElementById('registration-form');
    const fullNameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    // Similar variables for other inputs
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const dobInput = document.getElementById('dob');
    const submitBtn = document.getElementById('submit-btn');
    
    // Function to validate full name
    function validateFullName() {
      const fullName = fullNameInput.value.trim();
      const isValid = /^[A-Za-z\s]{3,}$/.test(fullName);
      showValidationStatus(fullNameInput, isValid);
      return isValid;
    }
    
    // Implement similar validation functions for email, password, confirm password, and DOB
    
    // Function to show validation status
    function showValidationStatus(input, isValid) {
      const statusElement = document.getElementById(`${input.id}-status`);
      statusElement.textContent = isValid ? '✅' : '❌';
    }
    
    // Function to check if passwords match
    function checkPasswordMatch() {   
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
      const isValid = password === confirmPassword && password.length >= 8;
      showValidationStatus(confirmPasswordInput, isValid);
      return isValid;
    }
    
    // Function to calculate age from date of birth
    function calculateAge(dob) {
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const months = today.getMonth() - birthDate.getMonth();
      if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
    
    // Event listeners for real-time validation
    fullNameInput.addEventListener('input', validateFullName);
    // Similar listeners for other inputs
    passwordInput.addEventListener('input', checkPasswordMatch);
    confirmPasswordInput.addEventListener('input', checkPasswordMatch);
    dobInput.addEventListener('input', () => {
      const age = calculateAge(dobInput.value);
      submitBtn.disabled = age < 18;
    });
    
    // Event listener for form submission
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    
      const isFullNameValid = validateFullName();
      // Similar validation checks for other fields
      const isPasswordMatch = checkPasswordMatch();
      const age = calculateAge(dobInput.value);
    
      if (isFullNameValid && isPasswordMatch && age >= 18) {
        // Form submission logic
        alert('Registration successful!');
      }
    });
    