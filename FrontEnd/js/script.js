function carregar_animais(){
    const livros_novidades = document.getElementById("animais")
    let saida ="";
    fetch("http://127.0.0.1:5000/api/v1/usuario/listar")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((liv)=>{
            saida +=`<div class="animaiss">
                    <img src="${liv.foto1}" alt="${liv.nome}">
                    <h3>${liv.nome}</h3>
                    <p class="preco"> R$ ${liv.preco}</p>
                    <button>
                    <img src="img/carrinho1.png">
                    <p> Adicionar ao carrinho </p>
                    </button>
                </div>`
        })
        livros_novidades.innerHTML=saida;
    })
    carregar_maisvendidos();
}