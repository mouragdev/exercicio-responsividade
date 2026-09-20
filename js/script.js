const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");

function openMenu() {
    document.body.classList.add("menu-aberto");
}

function closeMenu() {
    document.body.classList.remove("menu-aberto");
}

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);