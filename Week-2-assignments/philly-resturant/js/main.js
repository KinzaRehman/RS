// alert('works')

// Select the navigation links
const menuLink = document.querySelector(
  "header nav li:nth-child(1) a"
);

const cateringLink = document.querySelector(
  "header nav li:nth-child(2) a"
);

const findUsLink = document.querySelector(
  "header nav li:nth-child(3) a"
);

// Select the menu and footer
const menuSection = document.querySelector(".main");
const footer = document.querySelector("footer");

// Scroll to the menu
menuLink.addEventListener("click", function (event) {
  event.preventDefault();

  menuSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// Show the sample-site message for Catering
cateringLink.addEventListener("click", function (event) {
  event.preventDefault();

  alert(
    "This is a sample website. Please reach out to kinzarehman38@gmail.com to explore website options for your business!"
  );
});

// Scroll to the restaurant location
findUsLink.addEventListener("click", function (event) {
  event.preventDefault();

  footer.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});