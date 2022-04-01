// navbar
let linksButton = document.querySelector(".list");
let links = document.querySelector(".links");
linksButton.onclick = function (e) {
    e.stopPropagation();
    links.classList.toggle("open");
};
document.onclick = function () {
    links.classList.remove("open");
};
// scroll to top button
function scrollToTop() {
    if (window.scrollY >= 500) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};
window.addEventListener("scroll", scrollToTop);
let scrollButton = document.querySelector(".scroll-to-top");
scrollButton.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};
// landing buttons
let leftBtn = document.querySelector("#left-btn");
let rightBtn = document.querySelector("#right-btn");
let fatherPics = document.querySelector(".opacity");
let coloredLi = document.querySelectorAll("ul.dots li");
let s = 0;
rightBtn.onclick = function () {
    coloredLi.forEach(e => {
        e.className = "";
    });
    s++;
    if (s === 1) {
        fatherPics.style.left = "-100%";
        coloredLi[1].className = "colored";
    } else if (s === 2) { 
        fatherPics.style.left = "-200%";
        coloredLi[2].className = "colored";
    } else if (s === 3) {
        fatherPics.style.left = "0";
        s = 0;
        coloredLi[0].className = "colored";
    }
};
leftBtn.onclick = function () {
    coloredLi.forEach(e => {
        e.className = "";
    });
    if (s === 0) {
        s = 2;
        fatherPics.style.left = "-200%";
        coloredLi[2].className = "colored";
    } else if (s === 2) {
        s--;
        fatherPics.style.left = "-100%";
        coloredLi[1].className = "colored";
    } else if (s === 1) {
        s--;
        fatherPics.style.left = "0";
        coloredLi[0].className = "colored";
    }
};
// search bar
let search = document.querySelector("[name='search']");
let searchBtn = document.querySelector(".fa-search");
searchBtn.onclick = function (e) {
    e.stopPropagation();
    search.style.width = "140px";
    search.style.padding = "5px";
    search.focus();
};
search.onclick = function (e) { 
    e.stopPropagation();
}
document.onclick = function () {
    search.style.width = "0";
    search.style.padding = "0";
};
// portfolio button
let pics = document.querySelectorAll(".pic");
for (let i = 4; i < pics.length; i++) { 
    pics[i].style.display = "none";
}
let moreButton = document.querySelector("#more");
let more = true;
let active = document.querySelectorAll(".port ul li");
moreButton.onclick = function () {
    if (more === true) {
        for (let i = 4; i < pics.length; i++) {
            pics[i].style.display = "block";
        }
        moreButton.innerHTML = "LESS";
        more = false;
        active.forEach(e => {
            e.classList.remove("active");
        });
        active[0].classList.add("active");
    } else {
        for (let i = 4; i < pics.length; i++) {
            pics[i].style.display = "none";
        }
        moreButton.innerHTML = "MORE";
        more = true;
        active.forEach(e => {
            e.classList.remove("active");
        });
        active[2].classList.add("active");
    }
};
// TESTIMONIALS buttons
let testBtn = document.querySelectorAll("ul.bullets li");
let testDivs = document.querySelectorAll(".parent-cv");
testBtn[1].onclick = function () {
    testBtn.forEach(e => {
        e.classList.remove("active");
    });
    testBtn[1].classList.add("active");
    testDivs[0].style.display = "none";
    testDivs[1].style.display = "block";
};
testBtn[0].onclick = function () {
    testBtn.forEach(e => {
        e.classList.remove("active");
    });
    testBtn[0].classList.add("active");
    testDivs[1].style.display = "none";
    testDivs[0].style.display = "block";
};
// skills progress
function skillsProg() {
    let progress = document.querySelectorAll(".program span");
    progress.forEach(e => {
        e.style.width = "0";
        e.style.transition = "1s";
    });
    if (window.scrollY >= 4500) {
        progress[0].style.width = "95%";
        progress[1].style.width = "90%";
        progress[2].style.width = "70%";
        progress[3].style.width = "90%";
    }
};
window.addEventListener("scroll", skillsProg);
