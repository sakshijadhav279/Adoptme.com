
window.addEventListener("DOMContentLoaded", () => {
    let coverElement = document.querySelector(".cover");
    let impElement = document.querySelector(".home_page");
    let contactBtn = document.getElementById("cont");
    let homePage = document.querySelector(".home_page");
    let loginPlane = document.querySelector(".login_plane");
    let cancelEl = document.querySelector(".cancel");

    contactBtn.addEventListener('click', function () {
        loginPlane.classList.add("active_login");
        homePage.style.filter = "blur(3px)";
    })

    cancelEl.addEventListener("click", function () {
        homePage.style.filter = "none";
        loginPlane.classList.remove("active_login");
    })
    // impElement.style.display ="none";
    document.querySelector("body").style.overflowX = "hidden"
    // document.querySelector("body").style.overflowX = "hidden";
    console.log(impElement);
    // let count = 1000;
    // let myInverval = setInterval(() => {
    //     coverElement.style.backgroundColor = "rgb(0, 0 ,"+count+")";

    //     count=count - 10;
    //     setTimeout(() => {
    //         clearInterval(myInverval);

    //     }, 4000);
    // }, 10);
    // impElement.style.display = "none";

    // coverElement.style.display = "none"
    setTimeout(() => {
        coverElement.style.display = "none";


        document.querySelector("body").style.overflow = "auto";
        // setTimeout(() => {
        impElement.style.display = "block";
        ScrollReveal({
            delay: 200,
            duration: 2500,
            distance: "100px",
            reset: true
        })

        ScrollReveal().reveal(".info .main", {
            duration: 1200,
            origin: "left",
            delay: 200
        })

        ScrollReveal().reveal(".profile_tile", {
            duration: 1200,
            origin: "top",
            delay: 200,
            interval: 200
        })
        let partName = ScrollReveal({
            delay: 1000,
            distance: '100px',
            duration: 2500,
            reset: false
        });

        partName.reveal("header", {
            duration: 1000,
            delay: 0,
            origin: "top"
        })
        partName.reveal(".hero", {
            duration: 1000,
            delay: 0,
            origin: 'bottom'
        })


        // }, 100);

    }, 4000);
})





