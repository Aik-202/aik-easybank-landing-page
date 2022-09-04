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

if(menu.getAttribute("src").contains("./images/icon-hamburger.svg")) {
    menu.addEventListener("click",  () => {
        menu.setAttribute("src", "./images/icon-hamburger.svg");
        menu.classList.remove("changed")
    });
} else {
    menu.addEventListener("click", srcChanged = () => {
        menu.setAttribute("src", "./images/icon-close.svg");
    });
}
