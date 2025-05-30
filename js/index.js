// select timer element
const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2026 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  day.innerText = days;
  hour.innerText = hours;
  minute.innerText = minutes;
  second.innerText = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//  Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// arrow up btn
const arrowBtn = document.getElementById("arrow-up");
arrowBtn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

// cart tab
const cartIcon = document.getElementById("cart-icon");
const cartTab = document.getElementById("cart-tab");

let hideTimeout;

function showCart() {
  clearTimeout(hideTimeout);
  cartTab.classList.remove("hidden");
}

function hideCart() {
  hideTimeout = setTimeout(() => {
    cartTab.classList.add("hidden");
  }, 200);
}

cartIcon.addEventListener("mouseenter", showCart);
cartIcon.addEventListener("mouseleave", hideCart);
cartTab.addEventListener("mouseenter", showCart);
cartTab.addEventListener("mouseleave", hideCart);
