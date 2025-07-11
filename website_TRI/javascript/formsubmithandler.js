document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    showThankYouPopup(); // Fungsi dari popup-thankyou.js
  });
});
