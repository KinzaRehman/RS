// alert('works')
const donateButton = document.querySelector("header > a");

donateButton.addEventListener("click", function (event) {
  event.preventDefault();

  alert(
    "This is a sample website. Please reach out to kinzarehman38@gmail.com to explore website options for you!"
  );
});