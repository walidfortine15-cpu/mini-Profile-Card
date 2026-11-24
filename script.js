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
})