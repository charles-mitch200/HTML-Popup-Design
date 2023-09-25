// Get HTML elements from the page
const submitBtn = document.querySelector(".js-submit");
const okayBtn = document.querySelector(".js-ok");
const popup = document.getElementById("popup");

// Functions to display and hide the popup
const openPopup = () => {
  popup.classList.add("open-popup");
};

const closePopup = () => {
  popup.classList.remove("open-popup");
};

// Making the buttons functional
submitBtn.addEventListener("click", openPopup);
okayBtn.addEventListener("click", closePopup);
