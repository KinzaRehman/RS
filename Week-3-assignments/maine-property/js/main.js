// Select the navigation links
const servicesLink = document.querySelector(
  "header nav li:nth-child(1) a"
);

const reviewsLink = document.querySelector(
  "header nav li:nth-child(2) a"
);

const quoteLink = document.querySelector(
  "header nav li:nth-child(3) a"
);

// Select the page sections
const servicesSection = document.querySelector(
  ".main > section:nth-child(2)"
);

const reviewsSection = document.querySelector(
  ".main > section:nth-child(3)"
);

const quoteSection = document.querySelector(
  ".main > section:nth-child(4)"
);

// Scroll smoothly to a section
function scrollToSection(event, section) {
  event.preventDefault();

  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// Services navigation link
servicesLink.addEventListener("click", function (event) {
  scrollToSection(event, servicesSection);
});

// Reviews navigation link
reviewsLink.addEventListener("click", function (event) {
  scrollToSection(event, reviewsSection);
});

// Free Quote navigation link
quoteLink.addEventListener("click", function (event) {
  scrollToSection(event, quoteSection);
});

// Select the form and its fields
const quoteForm = document.querySelector("#quote-form");
const nameInput = document.querySelector("#customer-name");
const phoneInput = document.querySelector("#phone-number");
const serviceSelect = document.querySelector("#service");
const aboutInput = document.querySelector("#about");

// Run when the form is submitted
quoteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the information entered by the user
  const customerName = nameInput.value.trim();
  const phoneNumber = phoneInput.value.trim();
  const selectedService = serviceSelect.value;
  const customerMessage = aboutInput.value.trim();

  // Check whether any field is blank
  if (
    customerName === "" ||
    phoneNumber === "" ||
    selectedService === "" ||
    customerMessage === ""
  ) {
    alert("Please complete all fields.");
    return;
  }

  // Show a success message
  alert(
    `Thank you, ${customerName}! Your request for ${selectedService} has been entered.

This is a sample website. Please reach out to kinzarehman38@gmail.com to explore website options for your business!`
  );

  // Clear the form
  quoteForm.reset();
});