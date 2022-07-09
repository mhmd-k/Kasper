// navbar
let linksButton = document.querySelector(".list");
let links = document.querySelector(".links");
linksButton.onclick = function (e) {
  e.stopPropagation();
  if (!links.classList.contains("open")) {
    links.classList.add("open");
  } else {
    links.classList.remove("open");
  }
};
function removeOpenClass() {
  links.classList.remove("open");
}
document.addEventListener("click", removeOpenClass);
// scroll to top button
function scrollToTop() {
  if (window.scrollY >= 500) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}
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
let fatherPics = document.querySelector(".opacity");
let picsNumber = fatherPics.children.length;
let coloredLi = Array.from(document.querySelectorAll("ul.dots li"));
let s = 0;
let left = 0;
document.querySelector("#left-btn").addEventListener("click", function () {
  if (s === 0) {
    s = picsNumber - 1;
  } else {
    s--;
  }
  left = s * 100;
  fatherPics.style.left = `-${left}%`;
  coloredLi.forEach((e) => {
    e.classList.remove("colored");
  });
  coloredLi[s].classList.add("colored");
});
document.querySelector("#right-btn").addEventListener("click", function () {
  if (s === picsNumber - 1) {
    s = 0;
  } else {
    s++;
  }
  left = s * 100;
  fatherPics.style.left = `-${left}%`;
  coloredLi.forEach((e) => {
    e.classList.remove("colored");
  });
  coloredLi[s].classList.add("colored");
});
coloredLi.forEach((e) => {
  e.addEventListener("click", function () {
    coloredLi.forEach((ele) => {
      ele.classList.remove("colored");
    });
    e.classList.add("colored");
    s = coloredLi.indexOf(e);
    left = s * 100;
    fatherPics.style.left = `-${left}%`;
  });
});
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
};
function searchBar() {
  search.style.width = "0";
  search.style.padding = "0";
}
document.addEventListener("click", searchBar);
// portfolio button
let pics = document.querySelectorAll(".pic");
let moreButton = document.querySelector("#more");
let more = true;
let active = document.querySelectorAll(".port ul li");
function fewerPics() {
  for (let i = 4; i < pics.length; i++) {
    pics[i].style.height = "0";
  }
  moreButton.innerHTML = "MORE";
  more = true;
  active.forEach((e) => {
    e.classList.remove("active");
  });
  active[2].classList.add("active");
}
function morePics() {
  for (let i = 4; i < pics.length; i++) {
    pics[i].style.setProperty("height", pics[0].offsetHeight + "px");
  }
  moreButton.innerHTML = "LESS";
  more = false;
  active.forEach((e) => {
    e.classList.remove("active");
  });
  active[0].classList.add("active");
}
moreButton.addEventListener("click", function () {
  if (more === true) {
    morePics();
  } else {
    fewerPics();
  }
});
active[2].addEventListener("click", fewerPics);
active[0].addEventListener("click", morePics);
// TESTIMONIALS buttons
let testBtn = document.querySelectorAll("ul.bullets li");
let testDivs = document.querySelectorAll(".parent-cv");
testBtn[1].onclick = function () {
  testBtn.forEach((e) => {
    e.classList.remove("active");
  });
  testBtn[1].classList.add("active");
  testDivs[0].style.opacity = "0";
  testDivs[1].style.opacity = "1";
};
testBtn[0].onclick = function () {
  testBtn.forEach((e) => {
    e.classList.remove("active");
  });
  testBtn[0].classList.add("active");
  testDivs[1].style.opacity = "0";
  testDivs[0].style.opacity = "1";
};
// skills progress
let progress = document.querySelectorAll(
  ".skills-parent .container .skill span"
);
window.addEventListener("scroll", function () {
  if (
    this.window.scrollY >=
    this.document.querySelector(".skills-parent .container .skill").offsetTop -
      350
  ) {
    progress.forEach((e) => {
      e.style.width = e.getAttribute("data-prog");
    });
  } else {
    progress.forEach((e) => {
      e.style.width = "0";
    });
  }
});
// copyright
let copyright = document.querySelector("#copyright");
copyright.innerHTML = new Date().getFullYear();
