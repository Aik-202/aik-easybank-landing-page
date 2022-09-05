// const navList = $(".nav_list").chlidren();

const navList = document.querySelectorAll(".nav_list");
const borders = document.querySelectorAll(".border");
const menu = document.getElementById("hamburger_icon");
const hamburgerList = document.getElementById("hamburger_list");
const mockups = document.getElementById("mockups");
const actualList = hamburgerList.children;

for (let i = 0; i < navList.length; i++) {
    navList[i].addEventListener("mouseover", () => {
        borders[i].classList.add("border_active")
    });

    navList[i].addEventListener("mouseout", () => {
        borders[i].classList.remove("border_active")
    });

}

menu.addEventListener("click", () => {
    if (menu.getAttribute("src") === "./images/icon-hamburger.svg") {
        menu.setAttribute("src", "./images/icon-close.svg");
        mockups.style.display = "none";
        mockups.parentElement.previousElementSibling.style.paddingTop = "82%";
        mockups.parentElement.previousElementSibling.style.background = "linear-gradient( hsla(233, 26%, 24%, 0.75),hsl(0, 0%, 100%))";
        hamburgerList.style.display = "flex";
    } else {
        menu.setAttribute("src", "./images/icon-hamburger.svg");
        hamburgerList.style.display = "none";
        mockups.style.display = "block";
        mockups.parentElement.previousElementSibling.style.paddingTop = "0%";
        mockups.parentElement.previousElementSibling.style.background = "transparent";
    }
});

for (let i = 0; i < actualList.length; i++) {
    actualList[i].firstElementChild.addEventListener("mouseover", () => {
        actualList[i].firstElementChild.nextElementSibling.classList.add("ham_border_active")
    });

    actualList[i].addEventListener("mouseout", () => {
        actualList[i].firstElementChild.nextElementSibling.classList.remove("ham_border_active")
    });

}
