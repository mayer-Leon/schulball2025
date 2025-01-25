function showMenu() {
    let mobileMenu = document.querySelectorAll(".mobileMenu")[0];
    mobileMenu.style.opacity = "1";
    mobileMenu.style.transition = "200ms";
    mobileMenu.style.pointerEvents = "all";
    let blur = document.querySelectorAll(".blur")[0];
    blur.style.backdropFilter = "blur(10px)";
    blur.style.webkitBackdropFilter = "blur(10px)";
    blur.style.pointerEvents = "all";
}

function closeMenu() {
    let mobileMenu = document.querySelectorAll(".mobileMenu")[0];
    mobileMenu.style.opacity = "0";
    mobileMenu.style.transition = "200ms";
    mobileMenu.style.pointerEvents = "none";
    let blur = document.querySelectorAll(".blur")[0];
    blur.style.backdropFilter = "blur(0px)";
    blur.style.webkitBackdropFilter = "blur(0px)";
    blur.style.pointerEvents = "none";
}