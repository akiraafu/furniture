// menu
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("active");
    menu.classList.toggle("move");
    cart.classList.remove("active");
    login.classList.remove("active");
};

//cart Toggle
let cart = document.querySelector(".cart");

document.querySelector("#cart-icon").onclick = () => {
    cart.classList.toggle("active");
    navbar.classList.remove("active");
    menu.classList.remove("move");
    login.classList.remove("active");
};
//logon form toggle
let login = document.querySelector(".login-form");

document.querySelector("#user-icon").onclick = () => {
    login.classList.toggle("active");
    cart.classList.remove("active");
    navbar.classList.remove("active");
    menu.classList.remove("move");
};
