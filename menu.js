function showMenu() {
    let mobileMenu = document.querySelectorAll(".mobileMenu")[0];
    let blur = document.querySelectorAll(".blur")[0];
    mobileMenu.style.opacity = "1";
    mobileMenu.style.transition = "200ms";
    mobileMenu.style.pointerEvents = "all";
    blur.style.backgroundColor = "#000000d1";
    blur.style.transition = "200ms";
}

function closeMenu() {
    let mobileMenu = document.querySelectorAll(".mobileMenu")[0];
    let blur = document.querySelectorAll(".blur")[0];
    mobileMenu.style.opacity = "0";
    mobileMenu.style.transition = "200ms";
    mobileMenu.style.pointerEvents = "none";
    blur.style.backgroundColor = "#00000000";
    blur.style.transition = "200ms";
}