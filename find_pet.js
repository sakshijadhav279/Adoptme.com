// grabbing Element
const containerEl = document.querySelector(".container");
const firstPart = document.querySelector(".first-part");
const boxEl = document.getElementsByClassName("box");
const sampleText = document.querySelector(".sample_tex");
const gotoTop = document.querySelector(".goto_top");
const profileContainer = document.querySelector(".profile_container");

let titleShadow = document.querySelector(".title_shadow");
let titleEl;
let targetEl;
let count = 0;
firstPart.style.display = "block";

let blurEl = document.querySelector(".blur_part");
let planeEl = document.querySelector(".login_plane");
let cardContainer = document.getElementsByClassName("card_container");
console.log("list :", cardContainer);
for(let i = 0; i<3; i++){
    console.log(cardContainer[i]);
    cardContainer[i].addEventListener("click", function(e){

        if(e.target.id == "more"){
            console.log(e.target)
            blurEl.style.filter = "blur(3px)";
        planeEl.classList.add("active_login");        
        }
    })
}
let moreEl = document.querySelector("#more");
let cancelEl = document.querySelector(".cancel");

let contactEl = document.getElementById("cont");
contactEl.addEventListener("click", function(){
    blurEl.style.filter = "blur(3px)";
    planeEl.classList.add("active_login");
})
// moreEl.addEventListener("click", function(){
    
    // tittle.style.position = "sticky";
    // tittle.style.top = "0px"

// })

// let darkEl = document.getElementById("dark");
// darkEl.addEventListener("click", function(){
//     document.querySelector("body").classList.toggle("dark-mode")
// })

cancelEl.addEventListener("click",function(){
    blurEl.style.filter ="none";
    // tittle.style.position = "fixed";
    planeEl.classList.remove("active_login");
})




document.documentElement.style.webkitTextStrokeColor
let hg = window.getComputedStyle(containerEl).getPropertyValue("height");
hg = removepx(hg);
let firstPartHeight = window.getComputedStyle(firstPart).getPropertyValue("height");
firstPartHeight = removepx(firstPartHeight);
let targetElCategory;

containerEl.addEventListener("click", (event) => {
    console.log(event.target);
    targetEl = event.target.id + "-sec";
    console.log(targetEl);
    targetElCategory = document.getElementById(targetEl);
    console.log(targetElCategory);
    targetElCategory.classList.add("active");
    let str = "#" + targetEl + " .title";
    console.log(str);
    titleEl = document.querySelector(str);
    titleEl.style.display = "block";
    // sampleText.style.display = "block";
    console.log(sampleText)
    console.log(hg);

    window.scrollTo(0, firstPartHeight);
    
    setTimeout(() => {
        firstPart.style.display = "none";
        gotoTop.style.display = "block";
        window.onscroll = () => collapse(titleEl);
    }, 1000);

    // document.querySelector(".emp").style.display = "block";
})
function collapse(titleEl) {
    // console.log(titleEl);
    // console.log(titleEl)
    if ( window.scrollY> 20) {
        titleEl.style.padding = "40px";
        titleEl.style.fontSize = '40px';
        titleEl.style.webkitTextStrokeColor = " #ed26ff";
        titleEl.style.letterSpacing = "3px";
        titleEl.style.color = " #ed26ff";
        // titleEl.style.borderBottom = "5px solid #ed26ff"
        // titleShadow.style.fontSize = "40px";
        // titleEl.style.position = "sticky";
        // profileContainer.style.marginTop = "0px";
    }
    else {
        titleEl.style.padding = '130px'
        titleEl.style.fontSize = '150px';
        // titleShadow.style.fontSize = "250px";
        // titleEl.style.webkitTextFillColor = ""
        titleEl.style.letterSpacing = "25px"
        // if(document.querySelector("body").className == "dark-mode"){
            // alert("we are in dark mode")
            // titleEl.style.webkitTextStrokeColor = "black";
        // }
        // else{
            titleEl.style.webkitTextStrokeColor = "white";
        // }
        
        titleEl.style.color = "transparent";
        // titleEl.style.borderBottom = "5px solid rgb(235, 111, 39)"
        // titleEl.style.position = "fixed"
        // profileContainer.style.marginTop = "500px";
    }
}
gotoTop.addEventListener("click", () => {
    titleEl.style.display = "none";
    console.log("clicked");
    firstPart.style.display = "block";
    window.scrollTo(0, (firstPartHeight - hg));
    gotoTop.style.display = "none";
    setTimeout(() => {
        console.log("its been 1 seconds")
        targetElCategory.classList.remove("active");
    }, 700);

})

//functions 
function removepx(hg) {
    let num = hg.split("p");
    num = parseFloat(num[0]);
    return num;
}