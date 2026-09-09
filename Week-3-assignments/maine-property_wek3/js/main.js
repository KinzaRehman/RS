// alert('works')
// Select navigation links
const servicesLink = document.querySelector(
  'header nav li:nth-child(1) a'
);

const reviewsLink = document.querySelector(
  'header nav li:nth-child(2) a'
);

const quoteLink = document.querySelector(
  'header nav li:nth-child(3) a'
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

// Scroll to a section
function scrollToSection(event, section) {
  event.preventDefault();

  section.scrollIntoView({
    behavior: "smooth"
  });
}

servicesLink.addEventListener("click", function (event) {
  scrollToSection(event, servicesSection);
});

reviewsLink.addEventListener("click", function (event) {
  scrollToSection(event, reviewsSection);
});

quoteLink.addEventListener("click", function (event) {
  scrollToSection(event, quoteSection);
});

// Select the quote form information
const quoteButton = document.querySelector("form a");
const nameInput = document.querySelector('input[type="text"]');
const phoneInput = document.querySelector('input[type="tel"]');
const serviceSelect = document.querySelector("select");
const aboutInput = document.querySelector("textarea");

// Validate the form when the quote button is clicked
quoteButton.addEventListener("click", function (event) {
  event.preventDefault();

 const quoteForm = document.querySelector("#quote-form");
const nameInput = document.querySelector("#customer-name");
const phoneInput = document.querySelector("#phone-number");
const serviceSelect = document.querySelector("#service");
const aboutInput = document.querySelector("#about");

quoteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const customerName = nameInput.value.trim();
  const phoneNumber = phoneInput.value.trim();
  const selectedService = serviceSelect.value;
  const customerMessage = aboutInput.value.trim();

  if (
    customerName === "" ||
    phoneNumber === "" ||
    selectedService === "" ||
    customerMessage === ""
  ) {
    alert("Please complete all fields.");
    return;
  }

  alert(
    `Thank you, ${customerName}! Your request for ${selectedService} has been entered.

This is a sample website. Please reach out to kinzarehman38@gmail.com to explore website options for your business!`
  );

  quoteForm.reset();
});