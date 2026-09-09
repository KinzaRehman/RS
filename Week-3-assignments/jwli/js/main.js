// alert('works')
// Select the Apply button and both email inputs
const applyButton = document.querySelector(".apply-button");
const applicationEmail = document.querySelector("#application-email");
const newsletterEmail = document.querySelector("#newsletter-email");

// Select each form
const applicationForm = applicationEmail.closest("form");
const newsletterForm = newsletterEmail.closest("form");

// Move the user to the application email form
applyButton.addEventListener("click", function (event) {
  event.preventDefault();

  alert(
    "Hi, this is a portfolio website. Please reach out to kinzarehman38@gmail.com if you would like a website!"
  );
});
// Check the email and show a message
function handleEmailForm(event, emailInput, successMessage) {
  event.preventDefault();

  let formMessage = event.currentTarget.querySelector(".form-message");

  // Create a paragraph for the message if one does not exist
  if (!formMessage) {
    formMessage = document.createElement("p");
    formMessage.classList.add("form-message");
    formMessage.setAttribute("aria-live", "polite");
    event.currentTarget.appendChild(formMessage);
  }

  // Check whether the email is valid
  if (!emailInput.checkValidity()) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    emailInput.focus();
    return;
  }

  // Show success message and clear the email field
  formMessage.textContent = successMessage;
  formMessage.style.color = "green";
  emailInput.value = "";
}

// Application form submission
applicationForm.addEventListener("submit", function (event) {
  handleEmailForm(
    event,
    applicationEmail,
    "Thank you! We will let you know when applications open."
  );
});

// Newsletter form submission
newsletterForm.addEventListener("submit", function (event) {
  handleEmailForm(
    event,
    newsletterEmail,
    "Thank you for signing up for our newsletter!"
  );
});