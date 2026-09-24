const openMenuButton = document.querySelector(".js-open-menu");
const closeMenuButton = document.querySelector(".js-close-menu");

// 1. Selecionamos todos os links de navegação usando sua classe funcional JS
const navLinks = document.querySelectorAll(".js-nav-link");

function openMenu() {
    // Usamos o modificador de estado BEM --open na raiz ou onde for mais conveniente
    document.body.classList.add("page--menu-open");
}

function closeMenu() {
    document.body.classList.remove("page--menu-open");
}

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);

// 2. Passamos por cada link e adicionamos um ouvinte de clique
navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});


//  3. Salvamos os dados inseridos no formulario e previnimos o recarregamento da página
document.querySelector(".js-contact-form").addEventListener("submit", (event) => {
    const nomeInformado = document.querySelector(".js-form-name").value;
    const emailInformado = document.querySelector(".js-form-email").value;
    const mensagemFormulario = document.querySelector(".js-form-message").value;
    
    event.preventDefault();
    
    console.log(`Nome: ${nomeInformado}`);
    console.log(`Email: ${emailInformado}`);
    console.log(`Mensagem: ${mensagemFormulario}`);

    alert(`Obrigado ${nomeInformado}, sua mensagem foi enviada com sucesso.`);

    document.querySelector(".js-form-name").value = "";
    document.querySelector(".js-form-email").value = "";
    document.querySelector(".js-form-message").value = "";
});