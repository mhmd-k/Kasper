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
let leftBtn = document.querySelector("#left-btn");
let rightBtn = document.querySelector("#right-btn");
let fatherPics = document.querySelector(".opacity");
let coloredLi = document.querySelectorAll("ul.dots li");
let s = 0;
coloredLi[0].addEventListener("click", function () {
  coloredLi.forEach((e) => {
    e.className = "";
  });
  fatherPics.style.left = "0";
  s = 0;
  coloredLi[0].className = "colored";
});
coloredLi[1].addEventListener("click", function () {
  coloredLi.forEach((e) => {
    e.className = "";
  });
  fatherPics.style.left = "-100%";
  coloredLi[1].className = "colored";
  s = 1;
});
coloredLi[2].addEventListener("click", function () {
  coloredLi.forEach((e) => {
    e.className = "";
  });
  fatherPics.style.left = "-200%";
  coloredLi[2].className = "colored";
  s = 2;
});
rightBtn.onclick = function () {
  coloredLi.forEach((e) => {
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
  coloredLi.forEach((e) => {
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
