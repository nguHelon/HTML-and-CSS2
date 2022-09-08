const menubtn1 = document.querySelector("#header .header .account .fa-bars");
const ulNavbar = document.querySelector("#header .header ul");
const ulClose = document.querySelector("#header .header ul li .fa-xmark");

menubtn1.addEventListener("click", () => {
    ulNavbar.style.right = "0px";
});

ulClose.addEventListener("click", function () {
    ulNavbar.style.right = "-280px";
});