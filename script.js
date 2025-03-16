document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebarMenu = document.querySelector(".sidebar-menu");
    const sidebarClose = document.querySelector(".sidebar-close");

    menuIcon.addEventListener("click", () => {
        sidebarMenu.classList.toggle("active");
    });

    sidebarClose.addEventListener("click", () => {
        sidebarMenu.classList.remove("active");
    });
});
