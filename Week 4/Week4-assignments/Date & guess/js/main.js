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
// Select the HTML elements
const dateInput=document.querySelector("#month");
const submitButton=document.querySelector("#submit");
const displaySeason=document.querySelector("#displaySeason");
dateInput.addEventListener("click", function () {
  if (typeof dateInput.showPicker === "function") {
    dateInput.showPicker();
  }
});
const seasonSection=document.querySelector("#season");
const monthSections=document.querySelectorAll("#months > section");
const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const suggestions={Jan:"Grow paperwhites indoors near a bright window. Rotate the pot so the stems stay upright.",Feb:"Pair roses with fragrant hyacinths or sweet peas for a softer February arrangement.",Mar:"Plant cool-season flowers after checking the final frost date for your part of New York.",Apr:"Keep delicate spring flowers away from heaters, direct sunlight, and ripening fruit.",May:"Combine lilacs and garden roses, then add snapdragons for height and movement.",Jun:"Hydrangeas need plenty of water. Refresh their water often and lightly mist their petals.",Jul:"Choose heat-loving zinnias, sunflowers, and cosmos for a colorful summer garden.",Aug:"Pair dahlias with celosia and asters for a full late-summer arrangement.",Sep:"Mix marigolds and chrysanthemums with the last dahlias of the season.",Oct:"Add berries, branches, or ornamental kale for texture and an autumn-inspired arrangement.",Nov:"Combine fresh flowers with eucalyptus and dried stems to help the arrangement last longer.",Dec:"Combine amaryllis or roses with evergreen, and keep potentially toxic plants away from pets."};

seasonSection.hidden=true;
monthSections.forEach(section=>section.hidden=true);

function determineSeason(month,day){
  const value=month*100+day;
  if(value>=320&&value<=620)return "spring";
  if(value>=621&&value<=922)return "summer";
  if(value>=923&&value<=1220)return "autumn";
  return "winter";
}

function showFlowers(){
  document.querySelector("#selection .error")?.remove();
  if(!dateInput.value){
    const error=document.createElement("p");
    error.className="error";
    error.textContent="Please select a date first!";
    document.querySelector("#selection").appendChild(error);
    dateInput.focus();
    return;
  }
  const [,monthNumber,dayNumber]=dateInput.value.split("-").map(Number);
  const season=determineSeason(monthNumber,dayNumber);
  document.body.classList.remove("spring","summer","autumn","winter");
  document.body.classList.add(season);
  seasonSection.hidden=false;
  displaySeason.textContent=`${season[0].toUpperCase()+season.slice(1)}!`;
  monthSections.forEach(section=>section.hidden=true);
  const monthId=months[monthNumber-1];
  const selected=document.getElementById(monthId);
  selected.querySelector(".season-tip")?.remove();
  const tip=document.createElement("aside");
  tip.className="season-tip";
  tip.innerHTML=`<strong>Seasonal suggestion</strong><span>${suggestions[monthId]}</span>`;
  selected.appendChild(tip);
  selected.hidden=false;
  selected.scrollIntoView({behavior:"smooth",block:"start"});
}

submitButton.addEventListener("click",showFlowers);

// Animated GIFs do not reliably animate as CSS cursors, so the GIF follows the pointer as an image.
const fairyCursor=document.createElement("img");
fairyCursor.id="fairy-cursor";
fairyCursor.src="img/main_cursor.gif";
fairyCursor.alt="";
fairyCursor.setAttribute("aria-hidden","true");
document.body.appendChild(fairyCursor);

fairyCursor.addEventListener("load",()=>document.body.classList.add("cursor-ready"));
fairyCursor.addEventListener("error",()=>{
  document.body.classList.remove("cursor-ready");
  fairyCursor.remove();
  console.error("Could not load img/main_cursor.gif. Check the file name and folder.");
});
document.addEventListener("pointermove",event=>{
  fairyCursor.style.left=`${event.clientX}px`;
  fairyCursor.style.top=`${event.clientY}px`;
});
document.addEventListener("pointerover",event=>{
  fairyCursor.classList.toggle("over-link",Boolean(event.target.closest("a,button,input,label")));
});
// ==========================================
// MOTION TOGGLE
// ==========================================

const motionToggle = document.querySelector("#motion-toggle");
const motionToggleText = motionToggle.querySelector(
  ".motion-toggle-text"
);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

// Apply or remove no-motion mode
function setMotionPreference(motionIsOff) {
  document.body.classList.toggle(
    "motion-off",
    motionIsOff
  );

  motionToggle.setAttribute(
    "aria-pressed",
    String(motionIsOff)
  );

  motionToggleText.textContent = motionIsOff
    ? "Motion: Off"
    : "Motion: On";

  localStorage.setItem(
    "flowers-motion-off",
    String(motionIsOff)
  );
}

// Check for a previously saved choice
const savedMotionPreference = localStorage.getItem(
  "flowers-motion-off"
);

// Use the saved choice, or follow the device preference
if (savedMotionPreference !== null) {
  setMotionPreference(
    savedMotionPreference === "true"
  );
} else {
  setMotionPreference(
    prefersReducedMotion.matches
  );
}

// Change the setting when the button is clicked
motionToggle.addEventListener("click", function () {
  const motionIsCurrentlyOff =
    document.body.classList.contains("motion-off");

  setMotionPreference(!motionIsCurrentlyOff);
});