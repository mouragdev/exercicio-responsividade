const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");

// 1. Selecionamos todos os links de navegação dentro do menu
const navLinks = document.querySelectorAll("header nav ul li a");

function openMenu() {
    document.body.classList.add("menu-aberto");
}

function closeMenu() {
    document.body.classList.remove("menu-aberto");
}

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);

// 2. Passamos por cada link e adicionamos um ouvinte de clique
navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});


//  3. Salvamos os dados inseridos no formulario e previnimos o recarregamento da página
document.getElementById("contact-form").addEventListener("submit", (event) => {
    const nomeInformado = document.getElementById("nome-informado").value;
    const emailInformado = document.getElementById("email-informado").value;
    const mensagemFormulario = document.getElementById("mesage").value;
    
    event.preventDefault()
    
    console.log(`Nome: ${nomeInformado}`)
    console.log(`Email: ${emailInformado}`)
    console.log(`Mensagem: ${mensagemFormulario}`)

    alert(`Obrigado ${nomeInformado}, sua mensagem foi enviada com sucesso.`)

    document.getElementById("nome-informado").value = ""
    document.getElementById("email-informado").value = ""
    document.getElementById("mesage").value = ""
    
})