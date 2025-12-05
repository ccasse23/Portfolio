document.addEventListener("DOMContentLoaded", function () {

    // Language menu - demo purposes
    const languageSelect = document.getElementById("language");
    if (languageSelect) {
        languageSelect.addEventListener("change", function () {
            alert("Language changed to: " + this.value + " (Demo only)");
        });
    }

    // Fake forgot password email sender (demo only)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // stop real submission

            const email = document.getElementById("email").value;
            const message = document.getElementById("email-confirmation");

            if (email.trim() !== "") {
                message.style.display = "block";
            }
        });
    }

    // Login & Signup redirect (demo only)
    const accountForm = document.getElementById("accountForm");
    if (accountForm) {
        accountForm.addEventListener("submit", function (e) {
            e.preventDefault(); // stop real form submission

            accountForm.classList.add("submitted"); // triggers red border validation

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("pword").value.trim();

            if (email === "" || password === "") {
                alert("Please enter both email and password.");
                return; // stop redirect if fields are empty
            }

            // Redirect to favorites page
            window.location.href = "favorites.html";
        });
    }

});

// Heart toggle for favorites
const heartIcons = document.querySelectorAll(".favorite-icon");

heartIcons.forEach(icon => {
    icon.addEventListener("click", function (e) {
        e.preventDefault(); // prevent any link navigation
        icon.classList.toggle("hearted"); // toggle red/white heart

        // Optional: Save state in localStorage
        // Example: store the image src in a favorites array
        // let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        // const imgSrc = icon.previousElementSibling.src;
        // if (icon.classList.contains('hearted')) {
        //     favorites.push(imgSrc);
        // } else {
        //     favorites = favorites.filter(f => f !== imgSrc);
        // }
        // localStorage.setItem('favorites', JSON.stringify(favorites));
    });
});

// Touch-only click dropdowns
if (window.matchMedia("(hover: none)").matches) {
    document.querySelectorAll(".dropbtn").forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault(); // stop link jump

            const parent = this.parentElement;

            // Close all other open dropdowns
            document.querySelectorAll(".dropmenu").forEach(menu => {
                if (menu !== parent) {
                    menu.classList.remove("active");
                }
            });

            parent.classList.toggle("active");
        });
    });

    // Close dropdown if tapping outside
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropmenu")) {
            document.querySelectorAll(".dropmenu").forEach(menu => {
                menu.classList.remove("active");
            });
        }
    });
}

// Close dropdown if user clicks outside the nav
document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropmenu")) {
        document.querySelectorAll(".dropmenu").forEach(menu => {
            menu.classList.remove("active");
        });
    }
});

// Hamburger menu toggle (mobile)
const hamburger = document.getElementById("hamburger");
const leftNav = document.querySelector(".leftnav");

if (hamburger && leftNav) {
    hamburger.addEventListener("click", function () {
        leftNav.classList.toggle("show");
    });
}
