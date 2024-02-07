function togglePassword() {
  const passwordInput = document.getElementById("passwordInput");
  passwordInput.type === "password"
    ? (passwordInput.type = "text")
    : (passwordInput.type = "password");
}


function toglePassword() {
  const passwordInput = document.getElementById("pswordInput");
  passwordInput.type === "password"
    ? (passwordInput.type = "text")
    : (passwordInput.type = "password");
}


/*
 function togglePasswordVisibility() {
   var passwordInput = document.getElementById("passwordInput");
   var icon = document.querySelector(".toggle-password");

   if (passwordInput.type === "password") {
     passwordInput.type = "text";
     icon.classList.remove("fa-eye-slash");
     icon.classList.add("fa-eye");
   } else {
     passwordInput.type = "password";
     icon.classList.remove("fa-eye");
     icon.classList.add("fa-eye-slash");
   }
 }
 */
