const form = document.getElementById("subscribeForm");
const emailInput = document.getElementById("emailInput");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (!email || !validateEmail(email)) {
    message.textContent = "Please enter a valid email address.";
    message.classList.add("error");
    return;
  }

  message.classList.remove("error");
  message.textContent = "Thanks! You’ll be notified when DUKANZ launches.";
  form.reset();
});

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
