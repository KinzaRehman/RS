//alert("working")
// Select the navigation links
const navigationLinks = document.querySelectorAll("header nav a");

// Connect each navigation link to its matching section
const sections = {
  Features: ".two",
  "How It Works": ".three",
  Pricing: ".six",
  FAQ: ".seven"
};

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    const linkName = link.textContent.trim();

    // Scroll to the matching section
    if (sections[linkName]) {
      event.preventDefault();

      const selectedSection = document.querySelector(sections[linkName]);

      selectedSection.scrollIntoView({
        behavior: "smooth"
      });
    }

    // The login is only a portfolio demonstration
    if (linkName === "Log In") {
      event.preventDefault();

      alert("Login is not available in this portfolio demo. Please reach out to Kinzarehman38@gmail.com");
    }
  });
});

// Select the email input
const emailInput = document.querySelector("#email");

// Select all buttons
const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  // Remove the existing inline alert
  button.onclick = null;

  button.addEventListener("click", function () {
    const buttonText = button.textContent.trim();

    if (
      buttonText.includes("Start Free") ||
      buttonText.includes("Start free") ||
      buttonText.includes("Start 14-day")
    ) {
      checkEmail();
    }

    if (buttonText === "Talk to us") {
      alert("Thanks for your interest! This is a portfolio demo. Please reach out to Kinzarehman38@gmail.com");
    }
  });
});

// Check whether the visitor entered a valid email
function checkEmail() {
  const email = emailInput.value.trim();

  if (email === "") {
    alert("Please enter your email address.");
    emailInput.focus();
    return;
  }

  if (!emailInput.checkValidity()) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return;
  }

  alert("Thank you! This signup is part of the Lineup portfolio demo. Please reach out to Kinzarehman38@gmail.com");

  emailInput.value = "";
}