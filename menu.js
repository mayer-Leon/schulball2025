function showMenu() {
    let mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.opacity = "1";
    mobileMenu.style.transition = "200ms";
    mobileMenu.style.pointerEvents = "all";
    let blur = document.getElementById("blur");
    blur.style.backdropFilter = "blur(10px)";
    blur.style.pointerEvents = "all";
}

function closeMenu() {
    let mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.opacity = "0";
    mobileMenu.style.transition = "200ms";
    mobileMenu.style.pointerEvents = "none";
    let blur = document.getElementById("blur");
    blur.style.backdropFilter = "blur(0px)";
    blur.style.pointerEvents = "none";
}