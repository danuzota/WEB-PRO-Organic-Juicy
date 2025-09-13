const menuIcon = document.querySelector(".menu__icon"),
  header = document.querySelector(".header");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("menu__icon--active");

  header.classList.toggle("header--mobile");
});

// SLIDER-ARROWS

const sliderArrows = document.querySelector(".slider-arrows"),
  slidesArrows = sliderArrows.querySelectorAll(".slider-arrows__item"),
  prev = sliderArrows.querySelector(".slider-arrows__arrow--left"),
  next = sliderArrows.querySelector(".slider-arrows__arrow--right");

let slideIndex = 0;

prev.addEventListener("click", () => showSlideArrows(-1));
next.addEventListener("click", () => showSlideArrows(1));

function showSlideArrows(n) {
  slideIndex += n;

  if (slideIndex < 0) {
    slideIndex = slidesArrows.length - 1;
  }

  if (slideIndex >= slidesArrows.length) {
    slideIndex = 0;
  }

  slidesArrows.forEach((item) => (item.style.display = "none"));
  slidesArrows[slideIndex].style.display = "block";
}

showSlideArrows(0);

// SLIDER-DOTS AUTO

const sliderDots = document.querySelector(".slider-dots"),
  slidesDots = sliderDots.querySelectorAll(".slider-dots__item"),
  navDots = sliderDots.querySelectorAll(".slider-dots__nav-item");

let dotIndex = 0;

function showSlideDots(n) {
  if (n >= slidesDots.length) dotIndex = 0;
  if (n < 0) dotIndex = slidesDots.length - 1;

  slidesDots.forEach((item) => item.classList.remove("active"));
  navDots.forEach((dot) =>
    dot.classList.remove("slider-dots__nav-item--active")
  );

  slidesDots[dotIndex].classList.add("active");
  navDots[dotIndex].classList.add("slider-dots__nav-item--active");
}

function autoSlideDots() {
  dotIndex++;
  showSlideDots(dotIndex);
}

// первый показ
showSlideDots(dotIndex);

// автопереключение каждую секунду
setInterval(autoSlideDots, 2000);
