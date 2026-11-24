// 1. SELECT the elements
const mainTitle = document.getElementById("mainTitle");
const changeTitleBtn = document.getElementById("changeTitleBtn");
const themeBtn = document.getElementById("themeBtn");
const liveInput = document.getElementById("liveInput");
const liveText = document.getElementById("liveText");
const counterBtn = document.getElementById("counterBtn");
const counterValue = document.getElementById("counterValue");
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const formMessage = document.getElementById("formMessage");

// 2. Change the name: the title becomes the name typed in "Your name"
changeTitleBtn.addEventListener("click", () => {
  const newName = liveInput.value.trim();
  if (newName !== "") {
    mainTitle.textContent = newName;
  } else {
    mainTitle.textContent = "Please type a name first";
  }
});

// 3. Dark mode: add/remove the CSS class "dark" on the page
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeBtn.textContent = isDark ? "Light mode" : "Dark mode";
});

// 4. Live text: updates at every key typed
liveInput.addEventListener("input", () => {
  const value = liveInput.value.trim();
  liveText.textContent = value ? "Hello, " + value + "!" : "";
});

// 5. Counter: +1 at each click
let count = 0;
counterBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

// 6. Form validation
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Invalid email address.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
    contactForm.reset();
  }
});