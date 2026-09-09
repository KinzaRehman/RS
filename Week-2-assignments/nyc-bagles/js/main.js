// Select every link inside the navigation
const navLinks = document.querySelectorAll("nav a");

// Add the portfolio alert to every navigation link
navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // Stop the placeholder link from refreshing or moving the page
    event.preventDefault();

    alert(
      "This is a sample website. Please reach out to Kinzarehman38@gmail.com."
    );
  });
});