document.addEventListener("DOMContentLoaded", () => {
    const username = sessionStorage.getItem("loggedInUser");
    document.getElementById("user-name").textContent = username ? username : "Guest";
  });
  
  function logout() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html"; // redirect back to login page
  }
  