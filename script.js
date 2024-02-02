function togglePassword() {
  const passwordInput = document.getElementById("passwordInput");
  passwordInput.type === "password" ? passwordInput.type = "text" : (passwordInput.type = "password");
}
