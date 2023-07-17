let articlePage = document.querySelector(".article_page");
    let loginPlane = document.querySelector(".login_plane");
    let contactBtn = document.querySelector("#cont")
    let cancelEl = document.querySelector(".cancel");
contactBtn.addEventListener('click', function () {
    loginPlane.classList.add("active_login");
    articlePage.style.filter = "blur(3px)";
})

cancelEl.addEventListener("click", function () {
    articlePage.style.filter = "none";
    loginPlane.classList.remove("active_login");
})