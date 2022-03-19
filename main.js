// navbar
let linksButton = document.querySelector(".list");
let links = document.querySelector(".links");
linksButton.onclick = function () {
    if (links.style.display === "" || links.style.display === "none") {
        links.style.display = "flex";
    } else { 
        links.style.display = "none";
    }
};
// scroll to top button
let scrollButton = document.querySelector(".scroll-to-top");
window.onscroll = function () {
    if (window.scrollY >= 500) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};
scrollButton.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};
// landing buttons
let leftLandingBtn = document.querySelector("#left-btn");
let rightLandingBtn = document.querySelector("#right-btn");
let backgroundOne = document.querySelector(".landing-img-1");
let backgroundTwo = document.querySelector(".landing-img-2");

rightLandingBtn.onclick = function () {
    backgroundOne.style.right = "100%";
    backgroundTwo.style.left = "0";
    let dot = document.getElementsByClassName("colored")[0];
    dot.nextElementSibling.className = "colored";
    dot.className = "";
};
leftLandingBtn.onclick = function () {
    backgroundTwo.style.left = "100%";
    backgroundOne.style.right = "0";
    let dot = document.getElementsByClassName("colored")[0];
    dot.previousElementSibling.className = "colored";
    dot.className = "";
};

