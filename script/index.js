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

const subscribeForm = document.getElementById("subscribe-form");
const contacteForm = document.getElementById("contact-form");

// Add a submit event listener
subscribeForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  console.log("Form submitted!"); // Handle your form logic here
  const formData = new FormData(subscribeForm); // Get form data
  console.log("Email:", formData.get("email"));
});

contacteForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  console.log("Form submitted!"); // Handle your form logic here
  const formData = new FormData(contacteForm); // Get form data
  const data = Object.fromEntries(formData.entries());

  // Display all form data
  console.log("Form Data:", data);

  // If you need a JSON string
  const jsonData = JSON.stringify(data);
  console.log("JSON Data:", jsonData);
});
