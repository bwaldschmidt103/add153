document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is running!");

    let menuToggle = document.getElementById("menu-toggle");
    let navMenu = document.getElementById("nav-menu");
    let navItems = document.querySelectorAll("#nav-menu > li"); // Get all menu items

    if (!menuToggle || !navMenu) {
        console.error("Error: Missing #menu-toggle or #nav-menu.");
        return;
    }

    // ✅ Ensure height is set when toggling the menu
    menuToggle.addEventListener("click", function() {
        console.log("Button clicked!");
        navMenu.classList.toggle("show");
        console.log("Class list after toggle:", navMenu.classList);

        // Force height to prevent collapsing
        navMenu.style.height = "auto";
    });

    // ✅ Add click event to each menu item to activate "active" class
    navItems.forEach(item => {
        item.addEventListener("click", function() {
            toggleActive(item.id);
        });
    });
});

// Function to add/remove the "active" class from menu items
function toggleActive(selectedId) {
    let navItems = document.querySelectorAll("#nav-menu > li");

    navItems.forEach(item => item.classList.remove("active"));
    document.getElementById(selectedId).classList.add("active");
}
