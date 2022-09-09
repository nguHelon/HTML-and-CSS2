const menubtn1 = document.querySelector("#header .header .account .fa-bars");
const ulNavbar = document.querySelector("#header .header ul");
const li = document.querySelectorAll("#header .header ul li");
const ulClose = document.querySelector("#header .header ul li .fa-xmark");

menubtn1.addEventListener("click", () => {
    ulNavbar.style.right = "0px";
});

ulClose.addEventListener("click", function () {
    ulNavbar.style.right = "-280px";
});

li.forEach((list) => {
    list.addEventListener("click", () => {
        if (list.classList.contains("active") == false) {
            li.forEach((list) => {
                if (list.classList.contains("active") == true) {
                    list.classList.remove("active");
                }
            });
        }
        list.classList.add("active");
        console.log(list);
    });
});