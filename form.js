document.addEventListener("DOMContentLoaded", function() {
      const form = document.querySelector('.registration-form');
  
      form.addEventListener('submit', function(event) {
          event.preventDefault(); 
  
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          const age = document.getElementById('age').value;
          const birthdate = document.getElementById('birthdate').value;
          const gender = document.querySelector('input[name="gender"]:checked');
          const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(checkbox => checkbox.value);
          const country = document.getElementById('country').value;

          if (!gender) {
              alert("Please select your gender.");
              return;
          }
  
          const user = {
              name,
              email,
              password,
              age,
              birthdate,
              gender: gender.value,
              interests,
              country
          };
  
          console.log("User  Registration Details:", user);
          alert("Registration successful! Check the console for details.");
  
          form.reset()("Registration successful! Check the console for details.");
            const ageError = document.getElementById('age-error');
          const currentDate = new Date();
          const birthDate = new Date(birthdate);
          const ageDifference = currentDate.getFullYear() - birthDate.getFullYear();
          const monthDifference = currentDate.getMonth() - birthDate.getMonth();
          const dayDifference = currentDate.getDate() - birthDate.getDate();

          let calculatedAge = ageDifference;
          if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            calculatedAge--;
          }

          if (calculatedAge < 16 || calculatedAge > 100) {
            ageError.textContent = "You must be between 16 and 100 years old to register.";
            ageError.style.color = "red";
            return;
          } else {
            ageError.textContent = ""; // Clear error if age is valid
          }
      });
  });
  
    