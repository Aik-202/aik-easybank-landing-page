// const navList = $(".nav_list").chlidren();

const navList = document.querySelectorAll(".nav_list");
const borders = document.querySelectorAll(".border");

for( let i = 0; i < navList.length; i++){
    navList[i].addEventListener("mouseover", () => {
        borders[i].classList.add("border_active")
    });

    navList[i].addEventListener("mouseout", () => {
        borders[i].classList.remove("border_active")
    });

}

const menu = document.getElementById("hamburger_icon");
const hamburgerList = document.getElementById("hamburger_list");
const mockups = document.getElementById("mockups");

menu.addEventListener("click", () => {
    if(menu.getAttribute("src") === "./images/icon-hamburger.svg") {
        menu.setAttribute("src", "./images/icon-close.svg");
        mockups.style.display = "none";
        mockups.parentElement.previousElementSibling.style.marginTop = "80%";
        hamburgerList.style.display = "flex";
    } else {
        menu.setAttribute("src", "./images/icon-hamburger.svg");
        hamburgerList.style.display = "none";
        mockups.style.display = "block";
        mockups.parentElement.previousElementSibling.style.marginTop = "0%";
    }  
});
   

