// validação dos cadastros 
(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

//mostrar animais (tela index terá isso)

function carregar_animais(){
    const animaisss = document.getElementById("animais")
    let saida ="";
    fetch("http://10.26.45.39:3000/api/v1/pet/listar")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((pets)=>{
            saida +=`<div class="animaiss">              
                <div class="card" style="width: 15rem; ">
                <img src="${pets.foto1}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${pets.nome_pet}</h5>
                    <p class="card-text"> ${pets.descricao} </p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> Genero ${pets.sexo}</li>
                    <li class="list-group-item"> raça ${pets.raca}</li>
                    <li class="list-group-item"> idade ${pets.idade} </li>
                </ul>
                <div class="card-body text-center">
                    <button type="button" class="btn btn-outline-success"> Quero adotar </button>
                </div>
                </div>
                </div>`
        })
        animaisss.innerHTML=saida;
    })
    adotar_animais();
}

// interesse de adoção do usuario

function adotar_animais(){
    const interesse_adoção = document.getElementById("exampleModaladotar")
    let saida ="";
    fetch("http://10.26.45.39:3000/api/v1/pet/listar")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((interesse)=>{ `
           <div class="modal-dialog modal-lg">
      <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title" id="tituloInteresseAdocao">Formulário de Interesse na Adoção</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
      </div>

      <div class="modal-body">
        <div class="row">

          <!-- 🐾 Coluna de texto -->
          <div class="col-md-8">
            <p>🐾 <strong>Bem-vindo(a) ao nosso Formulário de Interesse.</strong></p>

            <p>Ficamos muito felizes por você ter dado o primeiro passo para adotar um pet! 🐶🐱</p>

            <p>
              Queremos lembrar que o <strong>My Pet Friend</strong> apenas cede o espaço virtual para facilitar a adoção. Os pets, as entrevistas e o processo de adoção são de inteira responsabilidade das ONGs e protetores parceiros, tudo bem?
            </p>

            <p>
              Após clicar no botão de "Tenho interesse", a ONG/protetor terá até <strong>48h para entrar em contato</strong>. E não se preocupe, estamos aqui para ajudar caso precise de qualquer suporte nesse processo.
            </p>
          </div>

          <!-- 🐶 Coluna de imagem -->
          <div class="col-md-4 text-center">
            <img id="imagemPetModal" src="img/${interesse.img_pet}.jpg" alt="Pet de interesse" class="img-fluid rounded shadow">
            <p class="mt-2"><strong id="nomePetModal">${interesse.nome_pet}</strong></p>
          </div>

        </div>
      </div>

      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-success">Tenho interesse</button>
      </div>

      </div>
      </div>
          `})
      interesse_adoção.innerHTML=saida;
      })
      notificacao_adocao();
    }

    
// para ongs
function notificacao_adocao(){
    const notificacoes = document.getElementById("notificacao")
    let saida ="";
    fetch("http://127.0.0.1:5000/api/v1/pet/listar")
    fetch("http://127.0.0.1:5000/api/v1/usuario/listar")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((pets)=>{ `
          <div class="row">
             <!-- Coluna da imagem -->
          <div class="col-md-4 text-center" >
            <img src="img/dog2.jpg" alt="Pet" style="width: 60px; height: 90px;">
            <img src="img/dog3.jpg" alt="Pet" style="width: 60px; height: 90px;">
          </div>
          
          <!-- Coluna de texto -->
          <div class="col-md-8 d-flex flex-column justify-content-center">
            <p><strong>O usuário ${pets.nome_usu} Demonstrou interessou pelo ${pets.nome_pet}!</strong></p>
            <p>Entre em contato para prosseguir com a adoção!</p>
            <div class="d-flex gap-3 align-items-center">
              <a href="tel:+55${pets.telefone_residencial}">
                <img src="img/icon_telefone.png" alt="Telefone" width="32">
              </a>
              <a href="mailto:${pets.email}">
                <img src="img/icon_email.png" alt="Email" width="32">
              </a>
              <a href="https://wa.me/${pets.telefone_celular}" target="_blank">
                <img src="img/icon_whatsapp.png" alt="WhatsApp" width="32">
              </a>
            </div>
          </div>
          <hr>
          `})
          notificacoes.innerHTML=saida;
      })
      notificacao_adocao()
    }


    let usuario_logado="usuario_logado"

    if(window.localStorage.getItem(usuario_logado)){
        let us = window.localStorage.getItem(usuario_logado)
        us = JSON.parse(us)
    
        let img_usuario = `<img src=${us.payload.foto_usu} class= "img_usuario">`
        
        let nome_us = us.payload.nome_usu
    
        document.getElementsByClassName("usuario")[0].style.padding="15px"
        
        document.getElementsByClassName("usuario")[0].innerHTML= img_usuario+nome_us
    }
    
    function efetuarlogin(){
        const usuario = document.getElementById("txtusuario")
        const senha = document.getElementById("txtpassword")
    
        fetch("http://10.26.45.39:3000/api/v1/usuario/login",{
            method:"POST",
            headers:{
                "accept":"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify({
                usuario:usuario.value,
                senha:senha.value
            })
        })
        .then((rs)=>rs.json())
        .then((dados)=>{
            window.localStorage.setItem(usuario_logado,JSON.stringify(dados))
            // Limpar o Formulário
            usuario.value = ""
            senha.value = ""
    
            // Atualizar a tela
            window.location.reload()
    
        })
        .catch((erro)=>console.error(erro))
    }