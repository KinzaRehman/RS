// alert('works')

// Select every navigation link
// Select navigation links
const homeLink = document.querySelector(
  "header nav li:nth-child(1) a"
);

const pricesLink = document.querySelector(
  "header nav li:nth-child(2) a"
);

const aboutLink = document.querySelector(
  "header nav li:nth-child(3) a"
);

const contactLink = document.querySelector(
  "header nav li:nth-child(4) a"
);

// Select page sections
const pricesSection = document.querySelector(".two");
const aboutSection = document.querySelector(".three");
const contactSection = document.querySelector("footer");

// Select the Book a Chair button
const bookButton = document.querySelector(".one > a");

// Reusable scrolling function
function scrollToSection(event, section) {
  event.preventDefault();

  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// Home: return to the top
homeLink.addEventListener("click", function (event) {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Prices: scroll to the prices table
pricesLink.addEventListener("click", function (event) {
  scrollToSection(event, pricesSection);
});

// About: scroll to the About the Shop section
aboutLink.addEventListener("click", function (event) {
  scrollToSection(event, aboutSection);
});

// Contact: scroll to the footer
contactLink.addEventListener("click", function (event) {
  scrollToSection(event, contactSection);
});

// Book a Chair: show the portfolio message
bookButton.addEventListener("click", function (event) {
  event.preventDefault();

  alert(
    "This is a sample website. Please reach out to Kinzarehman38@gmail.com."
  );
});