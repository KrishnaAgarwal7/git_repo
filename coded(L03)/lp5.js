document.addEventListener("DOMContentLoaded", (event) => {
  const button = document.getElementById("watsappBtn");

  button.addEventListener("click", () => {
    const phoneNumber = "918794212770"; // <-- CHANGE THIS NUMBER

    const message = "Yes";

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  });
});
