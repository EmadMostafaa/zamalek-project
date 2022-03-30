// to top button

const mybtn = document.getElementById("totop");

mybtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// making the header sticky & the top btn visible
const header = document.getElementsByTagName("header")[0];
// sticky = header.offsetTop;

window.onscroll = function () {
  if (window.scrollY >= 700) {
    // header.classList.add("sticky");
    mybtn.classList.add("show");
  } else {
    // header.classList.remove("sticky");
    mybtn.classList.remove("show");
  }
};

//============================

// get slider items
const sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// get number of slides
const slidesCount = sliderImages.length;

// set current Slide
var currentSlide = 1;

// slide number indicator
const indicator = document.getElementById("slide-number");

// previous and next buttons
const prevbtn = document.getElementsByClassName("fa-angle-right")[0];
const nextbtn = document.getElementsByClassName("fa-angle-left")[0];

// handle click on prev and next buttons
nextbtn.onclick = nextSlide;
prevbtn.onclick = previousSlide;

//create the main ul element
var bullets = document.createElement("ul");

//set id on created ul element
bullets.setAttribute("id", "bullets-ul");
bullets.classList.add("bullets");

//create list items based on slides count
for (let i = 1; i <= slidesCount; i++) {
  // create li elements
  let li = document.createElement("li");

  // set custom attribute
  li.setAttribute("data-index", i);

  //append lis to ul
  bullets.appendChild(li);
}

// add the created ul element to the page
document.getElementsByClassName("landing")[0].appendChild(bullets);

// get the new created ul
const bulletsUL = document.getElementById("bullets-ul");

// get bullets items
const bulletsArray = Array.from(document.querySelectorAll("#bullets-ul li"));

for (let i = 0; i < bulletsArray.length; i++) {
  bulletsArray[i].onclick = function () {
    currentSlide = bulletsArray[i].getAttribute("data-index");
    theChecker();
  };
}

//trigger the checker function
theChecker();
//============================
//next slide function
function nextSlide() {
  if (nextbtn.classList.contains("disabled")) {
    // do nothing
    return false;
  } else {
    currentSlide++;

    theChecker();
  }
}

//previous slide function
function previousSlide() {
  if (prevbtn.classList.contains("disabled")) {
    // do nothing
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}
//============================

//create the checker function
function theChecker() {
  //set the slide number
  indicator.textContent = "slide # " + currentSlide + " of " + slidesCount;

  //remove all active classes from images
  removeAllActive();

  //set active class on current slide
  sliderImages[currentSlide - 1].classList.add("active");

  //set active class on current bullet item
  bulletsUL.children[currentSlide - 1].classList.add("active");

  //check if the current slide is the first
  if (currentSlide == 1) {
    //add disabled class to previous btn
    prevbtn.classList.add("disabled");
  } else {
    //remove disabled class from previous btn
    prevbtn.classList.remove("disabled");
  }

  //check if the current slide is the last
  if (currentSlide == slidesCount) {
    //add disabled class to next btn
    nextbtn.classList.add("disabled");
  } else {
    //remove disabled class from next btn
    nextbtn.classList.remove("disabled");
  }
}

//remove all active classes from images and bullets
function removeAllActive() {
  // loop through images

  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  // // loop through lis
  bulletsArray.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
