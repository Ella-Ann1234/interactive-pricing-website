const slider = document.getElementById("my-range");
const ratePrice = document.querySelector(".rate-price");

const acceptBtn = document.querySelector(".accept-btn");
console.log(acceptBtn);


slider.oninput = function () {
  ratePrice.textContent = `$${slider.value}.00`;
  let x = (slider.value / 32) * 100;

  slider.style.background = `linear-gradient(to right, var(--clr-primary--300) ${x}%, var(--clr-neutral--200) 0%)`;

  if (slider.value < 1.0) {
    acceptBtn.style.opacity = "0.4";
    acceptBtn.style.cursor = "not-allowed";
  } else {
    acceptBtn.style.opacity = "1";
    acceptBtn.style.cursor = "pointer";
  }
};
