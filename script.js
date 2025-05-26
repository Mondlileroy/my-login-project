document.addEventListener("DOMContentLoaded", () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
  
    // Ensure buttons exist before attaching listeners
    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
      });
  
      signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
      });
    }
  });

  function login() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (username === "admin" && password === "1234") {
    // Save the username to sessionStorage
    sessionStorage.setItem("loggedInUser", username);

    // Redirect to dashboard.html
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("login-message").textContent = "Invalid login.";
  }
}

  