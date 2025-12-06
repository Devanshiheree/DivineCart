// Notification bar element
const notificationBar = document.getElementById("notification-bar");

// Show welcome notification on page load
notificationBar.innerText = "Welcome to DivineCart! Explore our featured products below.";
notificationBar.style.display = "block";

// Select all product "View" buttons
const viewButtons = document.querySelectorAll(".view-btn");

// Add click behaviour
for (let i = 0; i < viewButtons.length; i++) {
  const btn = viewButtons[i];

  btn.onclick = function (event) {
    event.preventDefault(); // stop '#' from jumping

    const productName = btn.getAttribute("data-product");

    // Update notification bar text (DOM change)
    notificationBar.innerText =
      productName + " is a popular pick! Check details on the product page.";
    notificationBar.style.background =
      "linear-gradient(90deg, #00b4d8, #0096c7)";

    // Small extra notification
    alert("You clicked on " + productName + "!");
  };
}
