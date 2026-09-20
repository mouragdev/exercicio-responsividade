const openMenuButton = document.getElementById("open-menu-button");

openMenuButton.addEventListener("click", () => {
    const nav = document.getElementById("header-nav");
    const iconeBotao = openMenuButton.querySelector("img");

    nav.classList.toggle("mobile-aberto");
    document.body.classList.toggle("menu-aberto");

    if(nav.classList.contains("mobile-aberto")) {
        iconeBotao.src = "./assets/close-menu.png"
        iconeBotao.className = "close-button"
    } else {
        iconeBotao.src = "./assets/mobile-menu.png"
        iconeBotao.className = "open-button"
    }
})