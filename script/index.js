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

let items = document.querySelectorAll(".testimonials-list .testimonial-item");
let next = document.getElementById("right-arrow");
let prev = document.getElementById("left-arrow");

// let active = 1;
// function loadShowSlide() {
//   let stt = 0;

//   items[active].style.transform = `none`;
//   items[active].style.zIndex = 10;

//   for (var i = active + 1; i < items.length; i++) {
//     stt++;
//     items[i].style.transform = `translateX(${(606 + 30) * stt}px)`;
//     items[i].style.zIndex = 1;
//   }

//   stt = 0;
//   for (var i = active - 1; i >= 0; i--) {
//     items[i].style.transform = `translateX(${-(606 + 30) * stt}px)`;
//     items[i].style.zIndex = 1;
//     stt++;
//   }
// }
// loadShowSlide();

// next.onclick = function () {
//   active = active + 1 < items.length ? active + 1 : active;
//   loadShowSlide();
// };

// prev.onclick = function () {
//   active = active - 1 >= 0 ? active - 1 : active;
//   console.log(`${active}`);
//   loadShowSlide();
// };
