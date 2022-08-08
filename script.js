const handleOpen = () => {
    document.getElementById("hamburgerMenu").classList.remove("hidden");
    document.getElementById("hamburgerMenu").classList.add("flex");
}

const handleClose = () => {
    document.getElementById("hamburgerMenu").classList.remove("flex");
    document.getElementById("hamburgerMenu").classList.add("hidden");
}

const mdScreenSize = window.matchMedia("(min-width: 768px)")

function autoCloseHamburger(screenSize) {
    if (screenSize.matches) {
        document.getElementById("hamburgerMenu").classList.remove("flex");
        document.getElementById("hamburgerMenu").classList.add("hidden");
    } 
  }
  
mdScreenSize.addEventListener("change", () => {
    autoCloseHamburger(mdScreenSize)
});

