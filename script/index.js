const success = "success";
const error = "error";
const warning = "warning";

const subscribeForm = document.getElementById("subscribe-form");
const contacteForm = document.getElementById("contact-form");

const notification = document.querySelector(".toast-notification");

const email_type = "email";
const text_type = "text";

function createToast(type, message) {
  let newToast = document.createElement("div");
  newToast.classList.add("toast");

  let icon_el;

  switch (type) {
    case success:
      icon_el = `<svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          class="success"
        >
          <path
            d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
          />
        </svg>`;
      break;

    case error:
      icon_el = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" class="error"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;
      break;

    case warning:
      icon_el = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" class="warning"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"/></svg>`;
      break;

    default:
      break;
  }
  newToast.innerHTML = `
        ${icon_el}
        <div id="toast-content">${message}</div>
  `;

  notification.appendChild(newToast);

  newToast.timeOut = setTimeout(() => {
    newToast.classList.add("hide");
    newToast.addEventListener("animationend", () => newToast.remove());
  }, 3000);
}

function validation(el, type) {
  el.addEventListener("invalid", function (e) {
    el.setCustomValidity(" ");

    let err_message;
    switch (type) {
      case email_type:
        const emailValue = el.value.trim(); // Get the trimmed email value
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex to validate email format

        if (!emailValue) {
          // Check if the email field is empty
          err_message = "Email is Required Field";
        } else if (!emailRegex.test(emailValue)) {
          // Check if the email format is invalid
          err_message = "Invalid Email Format";
        }

        createToast(warning, `${err_message}`);
        break;
      case text_type:
        const textValue = el.value.trim(); // Get the trimmed email value
        if (!textValue) {
          // Check if the email field is empty
          err_message = `${el.name} is Required Field`;
        }
        createToast(warning, `${err_message}`);
      default:
        break;
    }
  });

  // reset
  el.addEventListener("input", function (e) {
    el.setCustomValidity("");
  });
}

validation(subscribeForm.email, email_type);
validation(contacteForm.email, email_type);
validation(contacteForm.message, text_type);

subscribeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(subscribeForm);
  console.log("Form submitted!");
  console.log("Email:", formData.get("email"));

  // Call the toast function for success
  createToast(success, "Subscribe Success!");
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

  createToast(success, "Message Sent!");
});

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
