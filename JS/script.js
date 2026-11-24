// 1. SELECT the elements
const mainTitle = document.getElementById("mainTitle");
const aboutName = document.getElementById("aboutName");
const changeTitleBtn = document.getElementById("changeTitleBtn");
const themeBtn = document.getElementById("themeBtn");
const liveInput = document.getElementById("sloganInput");
const liveText = document.getElementById("sloganValue");
const hobbyInput = document.getElementById("hobbyInput");
const hobbyList = document.getElementById("hobbyList");
const counterBtn = document.getElementById("counterBtn");
const counterValue = document.getElementById("counterValue");
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const formMessage = document.getElementById("formMessage");

// 2. Change the name: the title AND the "À propos" name get the new name
changeTitleBtn.addEventListener("click", () => {
  const newName = prompt("Entrez un nouveau nom :");
  if (newName === null || newName.trim() === "") {
    alert("Nom invalide!");
  } else {
    mainTitle.textContent = newName.trim();
    aboutName.textContent = newName.trim();
  }
});

// 3. Dark mode: add/remove the CSS class "dark" on the page
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeBtn.textContent = isDark ? "Light mode" : "Dark mode";
});

// 4. Slogan: updates at every key typed, default text if the field is empty
const defaultSlogan = sloganValue.textContent;
sloganInput.addEventListener("input", () => {
  const value = sloganInput.value.trim();
  sloganValue.textContent = value !== "" ? value : defaultSlogan;
});
// 5. Hobbies: rebuild the list at every key typed
hobbyInput.addEventListener("input", () => {
  const hobbies = hobbyInput.value.split(",");
  hobbyList.textContent = "";
  for (const hobby of hobbies) {
    const cleanHobby = hobby.trim();
    if (cleanHobby === "") {
      continue;
    }
    const item = document.createElement("li");
    item.textContent = cleanHobby;
    hobbyList.appendChild(item);
  }
});
// 6. Like counter: click to like, click again to unlike
let likes = 0;
let isLiked = false;
counterBtn.addEventListener("click", () => {
  if (isLiked) {
    likes--;
    isLiked = false;
    counterBtn.textContent = "Like";
  } else {
    likes++;
    isLiked = true;
    counterBtn.textContent = "Unlike";
  }
  counterValue.textContent = likes;
});
// 7. Form validation
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