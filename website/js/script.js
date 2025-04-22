const form = document.getElementById('linkForm');
const linksList = document.getElementById('linksList');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter valores dos campos
    const siteName = document.getElementById('siteName').value;
    const siteUrl = document.getElementById('siteUrl').value;

    // Criar um novo item de lista
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = siteUrl;
    link.textContent = siteName;
    link.target = '_blank'; // Abre o link em uma nova aba
    listItem.appendChild(link);

    // Adicionar o item à lista
    linksList.appendChild(listItem);

    // Limpar os campos do formulário
    form.reset();
});