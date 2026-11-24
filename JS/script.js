const mainTitle= document.getElementById("mainTitle");
const changeTitleBtn= document.getElementById("changeTitleBtn");
const aboutName= document.getElementById("aboutName");
changeTitleBtn.addEventListener("click", function () {
    const newTxt= prompt("Entrez un nouveau nom: ");
    if(newTxt===null || newTxt.trim()===""){
        alert("Nom invalide!!");
    }else{
        mainTitle.textContent = newTxt;
        aboutName.textContent = newTxt;
    }
});
const sloganInput = document.getElementById("sloganInput");
const sloganValue = document.getElementById("sloganValue");
sloganInput.addEventListener("input", function(){
    if(sloganInput.value.trim()===""){
        sloganValue.textContent = "Abduuuz";
    }else{
        sloganValue.textContent = sloganInput.value; 
    }
});
const counterBtn = document.getElementById("counterBtn");
const counterValue = document.getElementById("counterValue");
let likes= 0;
let isLiked= false;
counterBtn.addEventListener("click", function(){
    if(isLiked===false){
        likes++;
        isLiked= true;
        counterBtn.textContent = "Unlike";
    }else{
        likes--;
        isLiked = false;
        counterBtn.textContent = "Like";
    }
    counterValue.textContent = likes;
});
const hobbyInput = document.getElementById("hobbyInput");
const hobbyList = document.getElementById("hobbyList");
hobbyInput.addEventListener("input", function(){
    const hobbys = hobbyInput.value.split(",");
    hobbyList.textContent="";
    for(const hobby of hobbys){
        const cleanHobby = hobby.trim();
        if(cleanHobby === ""){
            continue;
        }
        const item = document.createElement("li");
        item.textContent = cleanHobby;
        hobbyList.appendChild(item);
    }
});
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const formMessage = document.getElementById("formMessage");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if(nameInput.value.trim()===""){
        alert("Veuillez entrer votre nom.");
        return;
    }
    if(!emailInput.value.includes("@") || !emailInput.value.includes(".")){
        alert("L'email doit contenir un @ et .");
        return;
    }
    if(messageInput.value.trim()===""){
        alert("Veuillez entrer un message valide.");
        return;
    }
    formMessage.textContent = "Merci " + nameInput.value.trim() + "!";
    contactForm.reset();
});