document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".our-working-process-grid");

  cardsContainer.addEventListener("click", (event) => {
    // Check if the clicked element is a toggle button
    if (
      event.target.classList.contains("expand-btn") ||
      event.target.classList.contains("plus-icon") ||
      event.target.classList.contains("minus-icon")
    ) {
      const card = event.target.closest(".our-working-process-item");

      // Toggle the open class
      card.classList.toggle("expanded");

      console.log("expanded", card.classList);

      // Update button text based on state
      //   event.target.textContent = cardContent.classList.contains("open")
      //     ? "Close"
      //     : "Open";
    }
  });
});
