function changeImage() {
    const hamburger = document.getElementById("hamburger");
    const close = document.getElementById("close");
    const hamburgerDisplay = getComputedStyle(hamburger).display;

    const navbar = document.querySelector("ul.main-navbar");

    if(hamburgerDisplay !== "none"){
        hamburger.style.display = "none";
        close.style.display = "block";
        navbar.classList.add("open");    
    } else {
        hamburger.style.display = "block";
        close.style.display = "none";
        navbar.classList.remove("open");    
    }
}