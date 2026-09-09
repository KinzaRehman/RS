// alert('works')

// Select the header navigation links
const flavorNavLink = document.querySelector(
  "header nav li:nth-child(1) a"
);

const sizesNavLink = document.querySelector(
  "header nav li:nth-child(2) a"
);

const standNavLink = document.querySelector(
  "header nav li:nth-child(3) a"
);

const callNavLink = document.querySelector(
  "header nav li:nth-child(4) a"
);

// Select the hero buttons
const todayFlavorsButton = document.querySelector(
  ".photoCont a:nth-of-type(1)"
);

const findStandButton = document.querySelector(
  ".photoCont a:nth-of-type(2)"
);

// Select the main sections
const flavorsSection = document.querySelector(".one");
const sizesSection = document.querySelector(".two");
const standSection = document.querySelector(".three");

// Select the footer Back to Top button
const backToTopButton = document.querySelector(
  "footer section:nth-of-type(5) a"
);

// Reusable smooth-scrolling function
function scrollToSection(event, section) {
  event.preventDefault();

  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// Header navigation
flavorNavLink.addEventListener("click", function (event) {
  scrollToSection(event, flavorsSection);
});

sizesNavLink.addEventListener("click", function (event) {
  scrollToSection(event, sizesSection);
});

standNavLink.addEventListener("click", function (event) {
  scrollToSection(event, standSection);
});

// Hero buttons
todayFlavorsButton.addEventListener("click", function (event) {
  scrollToSection(event, flavorsSection);
});

findStandButton.addEventListener("click", function (event) {
  scrollToSection(event, standSection);
});

// Call the Window portfolio alert
callNavLink.addEventListener("click", function (event) {
  event.preventDefault();

  alert(
    "This is a sample website. Please reach out to kinzarehman38@gmail.com to explore website options for your business!"
  );
});

// Select the placeholder phone and directions links
const standLinks = document.querySelectorAll('.three a[href="#"]');
const footerPhoneLink = document.querySelector(
  'footer section:nth-of-type(3) a[href="#"]'
);

// Add an alert to the phone and directions links
standLinks.forEach(function (link) {
  link.addEventListener("click", showPortfolioMessage);
});

footerPhoneLink.addEventListener("click", showPortfolioMessage);

function showPortfolioMessage(event) {
  event.preventDefault();

  alert(
    "This is a sample website. Please reach out to kinzarehman38@gmail.com to explore website options for your business!"
  );
}

// Back to Top button
backToTopButton.addEventListener("click", function (event) {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});