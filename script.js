const handleOpen = () => {
    document.getElementById("hamburgerMenu").classList.remove("hiddenHamburger");
    document.getElementById("hamburgerMenu").classList.add("openHamburger");
    document.getElementById("openButton").style.opacity = "0";
    document.getElementById("closeButton").style.opacity = "100";
}

const handleClose = () => {
    document.getElementById("hamburgerMenu").classList.remove("openHamburger");
    document.getElementById("hamburgerMenu").classList.add("hiddenHamburger");
    document.getElementById("openButton").style.opacity = "100";
    document.getElementById("closeButton").style.opacity = "0";
}

const mdScreenSize = window.matchMedia("(min-width: 768px)")

function autoCloseHamburger(screenSize) {
    if (screenSize.matches) {
        document.getElementById("openButton").style.opacity = "100";
        document.getElementById("hamburgerMenu").classList.remove("openHamburger");
        document.getElementById("hamburgerMenu").classList.add("hiddenHamburger");
    } 
  }
  
mdScreenSize.addEventListener("change", () => {
    autoCloseHamburger(mdScreenSize)
});

