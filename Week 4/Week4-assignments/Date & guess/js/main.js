// // alert('works')

// {//logic for seasons
// //Winter (decemebr 21st-March 19th)
// //Spring (March 20th- June 20th)
// //Summer (June 21st- September 22nd)
// //Autumn (sep 23rd- december 20)
// }    
 
// // seasonal flowers, for each month which flowers are in season around the year in the unties states? 
// {//these are all the months but in html 
// {
// //January 
// // January is Winter Elegance!
// // some in season flwoers: 
// // -Amaryllis
// // -Anemones
// // -Paperwhites
// // -Ranunchulus
// // -Hellebores
// // -Orchids
// }
// {
// //February
// // February is red hearts!
// // some in season flowers:
// // -Roses
// // -Tulips
// // -Sweet Peas
// // -Camellias
// // -Ranunchulus
// // -Hyacinths 
// }
// {
// // March
// // March is spring awakening!
// // Some in season flowers
// // -Daffodils
// // -Tulips
// // -Irises
// // -Hyacinths
// // -Freesia
// // -Pussy willows
// }
// {
// // April
// // April is peak Spring!
// // Some in season flowers:
// // -Peonies
// // -Tulips
// // -Cherry blossoms 
// // -Lily of the valley
// // -Ranunchulus
// }
// {
// //May
// // May is peony Season!
// // Some in season flowers:
// // -Peonies
// // -Garden roses
// // -Lilacs
// // -Snapdargons
// // -Allium
// }
// {
// //June
// //June is the officially summer!
// // some in season flowers:
// // -Peonies
// // -Roses
// // -Hydranges
// // -Delphinium
// //-Lsianthus
// // -Lavender
// }
// {
// //July
// //July is high summer
// // Some in season flowers:
// // -Sunflowers
// // -Dahlias
// // -Zinnias 
// // -Cosmos
// // -Gladiolus
// // -Roses
// }
// {
// //August
// //August is late summer abundance!!
// // Some in season flowers:
// // -Dahlias
// // -Sunflowers 
// // -Tuberose 
// // -Lisiantus
// // -Aesters
// // -Celosia
// }
// {
// //September
// //September is tansitioning to fall! 
// // Some in season flowers:
// // -Dahlias
// // -Chryanthemums
// // -Marigolds
// // -Sedum
// // -Roses
// // -Ornamental grass
// }

// {
// //October 
// //October is peak fall!
// // Some in season flowers:
// // - Chrysanthemums 
// // - Dahlias
// // -Calla Lilies
// // - Hypericum berries
// // -Bittersweet
// // -Ornamental Kale
// }
// {
// //November
// //Novemebr is late Autumn!
// // Some in season flowers:
// // - Chrysanthemums 
// // - roses
// // -Carnations 
// // -Protea 
// // -Eucalyptus
// // -Dired Flowers 
// }
// {
// //December 
// //December means you've made it!
// // Some in season flowers:
// // -Poinsettias
// // -Amaryllis
// // -Paperwhites
// // -Red roses
// // -Holly and evergreen 
// // -Orchids 
// }
// }

// Select the HTML elements
const dateInput = document.querySelector("#month");
const submitButton = document.querySelector("#submit");
const displaySeason = document.querySelector("#displaySeason");
const monthSections = document.querySelectorAll("#months > section");

// Connect each month number to its HTML section ID
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];

// Hide all flower recommendations when the page first loads
monthSections.forEach(function(section) {
    section.style.display = "none";
});

// Listen for the button click
submitButton.addEventListener("click", function() {
    const selectedDate = dateInput.value;

    // Check if the user selected a date
    if (selectedDate === "") {
        displaySeason.textContent = "Please select a date first!";
        return;
    }

    // The date looks like: YYYY-MM-DD
    const dateParts = selectedDate.split("-");

    const monthNumber = Number(dateParts[1]);
    const dayNumber = Number(dateParts[2]);

    // Combine the month and day for easier date-range comparisons
    // March 20 becomes 320
    // June 21 becomes 621
    const monthAndDay = monthNumber * 100 + dayNumber;

    let season;
    // Determine the season using the exact date ranges
    if (monthAndDay >= 320 && monthAndDay <= 620) {
        season = "Spring";
    } else if (monthAndDay >= 621 && monthAndDay <= 922) {
        season = "Summer";
    } else if (monthAndDay >= 923 && monthAndDay <= 1220) {
        season = "Autumn";
    } else {
        // December 21 through March 19
        season = "Winter";
    }

    // Display the correct season
    displaySeason.textContent =
        "The season for your selected date is " + season + "!";

    // Hide every month's flower recommendations
    monthSections.forEach(function(section) {
        section.style.display = "none";
    });

    // Find the correct month ID
    const selectedMonthId = months[monthNumber - 1];

    // Find the matching HTML section
    const selectedMonthSection =
        document.querySelector("#" + selectedMonthId);

    // Show that month's flower recommendations
    selectedMonthSection.style.display = "block";

    // Smoothly scroll to the recommendations
    selectedMonthSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

