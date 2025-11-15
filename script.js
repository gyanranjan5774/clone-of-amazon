//seacr functionality
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

if (searchIcon) {
    searchIcon.addEventListener("click", () => {
        const value = searchInput.value.trim();
        if (value === "") {
            alert("Please enter something to search.");
        } else {
            alert("Searching for: " + value);
        }
    });
}


//  Click eff and message
const cart = document.querySelector(".cart");

if (cart) {
    cart.addEventListener("click", () => {
        cart.style.transform = "scale(1.1)";
        setTimeout(() => {
            cart.style.transform = "scale(1)";
        }, 150);

        alert("Your cart is currently empty.");
    });
}


// back to top functionality
const backToTop = document.querySelector(".foot-panel1");

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// language selector functionality
const regionSelector = document.querySelector(".region .select");

if (regionSelector) {
    regionSelector.addEventListener("change", () => {
        alert("Language changed to: " + regionSelector.value);
    });
}


// account selector functionality
const accountSelect = document.querySelector(".sign .select");

if (accountSelect) {
    accountSelect.addEventListener("change", () => {
        alert("Selected: " + accountSelect.value);
    });
}


// panel options toggle functionality
const menuBtn = document.querySelector(".panel-all");
const panelOptions = document.querySelector(".option");

if (menuBtn && panelOptions) {
    menuBtn.addEventListener("click", () => {
        panelOptions.classList.toggle("show-options");
    });
}


// box hover effect
const allBoxes = document.querySelectorAll(".box");

allBoxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.02)";
        box.style.transition = "0.2s";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
    });
});
