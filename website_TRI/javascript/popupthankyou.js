document.addEventListener("DOMContentLoaded", function () {
  const popup = document.createElement("div");
  popup.id = "popup-thankyou";
  popup.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden";
  popup.innerHTML = `
    <div class="bg-white p-6 rounded-lg shadow-md max-w-md text-center">
      <h2 class="text-xl font-bold mb-4 text-green-600">Terima kasih!</h2>
      <p class="text-gray-700 mb-6">Jawaban kamu sudah dikirim.</p>
      <a href="../../index.html" class="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
        Kembali ke Beranda
      </a>
    </div>
  `;

  document.body.appendChild(popup);

  window.showThankYouPopup = function () {
    popup.classList.remove("hidden");
  };
});
