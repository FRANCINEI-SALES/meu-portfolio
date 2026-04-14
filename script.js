const meusProjetos = [
    {
        titulo: "SaborExpress - Aplicativo de Vendas de Bolos e Salgados",
        descricao: "Oferece uma plataforma intuitiva que simplifica a escolha e compra de bolos e salgados artesanais, unindo a conveniência do atendimento digital à excelência de produtos de qualidade para o dia a dia ou eventos.",
        link: "#"
    },
];

const container = document.getElementById('lista-projetos');

meusProjetos.forEach(projeto => {
    const card = document.createElement('div');
    card.classList.add('projeto-card');
    
    card.innerHTML = `
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver mais</a>
    `;
    
    container.appendChild(card);
});