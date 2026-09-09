// alert('works')

// Select every navigation link
const navLinks = document.querySelectorAll("header nav a");

// Show a portfolio message when a navigation link is clicked
navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    alert(
      "This is a sample website. Please reach out to Kinzarehman38@gmail.com."
    );
  });
});

// Select the hero buttons
const menuButton = document.querySelector(
  ".photoCont a:nth-of-type(1)"
);

const howToButton = document.querySelector(
  ".photoCont a:nth-of-type(2)"
);

// Select the related sections
const menuSection = document.querySelector(".one");
const howToSection = document.querySelector(".two");

// Scroll to the menu
menuButton.addEventListener("click", function (event) {
  event.preventDefault();

  menuSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// Scroll to the Lobster How-To section
howToButton.addEventListener("click", function (event) {
  event.preventDefault();

  howToSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// Select the phone and directions links
const locationLinks = document.querySelectorAll('.three a[href="#"]');

const footerPhoneLink = document.querySelector(
  '.topF a[href="#"]'
);

// Reusable sample-site alert
function showSampleMessage(event) {
  event.preventDefault();

  alert(
    "This is a sample website. Please reach out to Kinzarehman38@gmail.com."
  );
}

// Add the alert to location links
locationLinks.forEach(function (link) {
  link.addEventListener("click", showSampleMessage);
});

if (footerPhoneLink) {
  footerPhoneLink.addEventListener("click", showSampleMessage);
}

// Select the Back to Top link
const backToTopLink = document.querySelector(
  "footer > section:nth-of-type(5) a"
);

// Smoothly return to the top
backToTopLink.addEventListener("click", function (event) {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});