let value = 0;

let currentImage = function (value) {
  let carouselImage = document.querySelector(".carouselImage");
  carouselImage.src = `./images/eid-${value}.jpg`;
};

let activeImage = function (value) {
  console.log("Current active image :" + value);
  var elem = document.getElementById(`${value}`);
  elem.classList.add("fa-solid");
};

let inactiveImages = function (value) {
  let arr = [0, 1, 2, 3, 4, 5];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      console.log("inactive classes" + i);
      var elem = document.getElementById(`${i}`);
      elem.classList.remove("fa-solid");
    }
  }
};

// Initial setup
activeImage(value);

// Function when previous button is clicked
document.querySelector(".previousImage").addEventListener("click", function () {
  value--;
  if (value === -1) {
    value = 5;
  }
  currentImage(value);
  activeImage(value);
  inactiveImages(value);
});

// Function when next button is clicked
document.querySelector(".nextImage").addEventListener("click", function () {
  value++;
  console.log("Next image " + value);
  if (value === 6) {
    value = 0;
  }
  currentImage(value);
  activeImage(value);
  inactiveImages(value);
});
