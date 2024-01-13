document.addEventListener("DOMContentLoaded", function () {
  // Get the button elements
  const logout = document.getElementById("logout");

  // Add click event listeners
  logout.addEventListener("click", function () {
    window.location.href = "login.html";
  });
});
