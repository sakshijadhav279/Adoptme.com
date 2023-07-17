//gabbing elements
let heroHeading = document.querySelector(".hero_heading");
let tp = document.getElementsByClassName("top");
let im = document.getElementsByClassName("story_part_img");
let strPart = document.querySelector(".story_container");
// tp[0].style.backgroundColor = "red";
// tp.style.position = "absolute";
// strPart.style.top = "50px"
let heroHeadingScroll = ScrollReveal({
    // delay: 1000,
    duration: 2500,
    distance: "100px",
    reset: true
});

heroHeadingScroll.reveal(".hero_heading", {
    duration: 1000,
    origin: "bottom",
    delay: 200
});

let imgScroll = ScrollReveal({
    delay: 1000,
    duration: 2500,
    distance: "150px",
    reset: true
});
imgScroll.reveal(".img", {
    duration: 1000,
    origin: "right",
    delay: 200
})


let stepEl = document.querySelector(".step");
let stepElScroll = ScrollReveal({
    delay: 1000,
    duration: 1500,
    distance:"50px"
})
stepElScroll.reveal('.step', {
    duration:1000,
    origin:"bottom",
    delay: 100
})
stepElScroll.reveal(".sub_step",{
    duration: 1000,
    origin: "left",
    delay:100
})
stepElScroll.reveal(".stepimg",{
    duration: 1000,
    origin: "right",
    delay: 100
})

let contactBtn = document.getElementById("cont");
let howItWorksPage = document.querySelector(".how_it_works_page");
let loginPlane = document.querySelector(".login_plane");
let cancelEl = document.querySelector(".cancel");

contactBtn.addEventListener('click', function () {
    loginPlane.classList.add("active_login");
    howItWorksPage.style.filter = "blur(3px)";
})

cancelEl.addEventListener("click", function () {
    howItWorksPage.style.filter = "none";
    loginPlane.classList.remove("active_login");
})