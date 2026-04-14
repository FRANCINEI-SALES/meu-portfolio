const meusProjetos = [
    {
        titulo: "SaborExpress - Aplicativo de Vendas de Bolos e Salgados",
        descricao: "O SaborExpress é um aplicativo de vendas de bolos e salgados que conecta clientes a uma variedade de opções saborosas e práticas, oferecendo uma plataforma simples e intuitiva para realizar pedidos, acompanhar entregas e garantir conveniência no acesso a produtos artesanais de qualidade, ideal para quem busca rapidez, praticidade e sabor no dia a dia.",
        link: "#"
    },

    {
        titulo: "Identidade Visual & Vetorização",
        descricao: "Criação de materiais gráficos e manipulação de imagens utilizando técnicas avançadas de design digital.",
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
    container.appendChild(card);
});
