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

//mostrar animais cadastrados pela ong
function carregar_animais_ong() {
  const animaiss_ongg = document.getElementById("animais_ong");
  const idOng = localStorage.getItem("id_ong");
  let saida = ""
  
  fetch("http://10.26.45.39:3000/api/v1/pet/listar?ong=${idOng}")
    .then(res => res.json())
    .then(dados => {
      dados.forEach(pets => {
        saida += `    <div class="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
            <div class="card" style="width: 15rem;">
              <img src="${pets.foto_pet1}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${pets.nome_pet}</h5>
                <p class="card-text">${pets.descricao}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Gênero: ${pets.sexo}</li>
                <li class="list-group-item">Raça: ${pets.raca}</li>
                <li class="list-group-item">Idade: ${pets.idade}</li>
              </ul>
              <div class="card-body text-center">
                <button class="btn btn-outline-success" onclick='adotar_animais(${JSON.stringify(pets)})'>
                  Quero Adotar
                </button>
              </div>
            </div>
          </div>`;
      });

      container.innerHTML = `<div class="row">${saida}</div>`;
    })
      .catch(erro => console.error(erro))
  }
  


//mostrar animais index 
function carregar_animais_index() {
  const container = document.getElementById("animais");
  container.innerHTML = '';

  fetch("http://10.26.45.39:3000/api/v1/pet/listar")
    .then(res => res.json())
    .then(dados => {
      // Inverte a lista para pegar os mais recentes primeiro
      const dadosInvertidos = dados.reverse();
      // Pega os 4 primeiros da lista invertida (ou menos, se houver menos de 4)
      const ultimosQuatro = dadosInvertidos.slice(0, 4);

      ultimosQuatro.forEach(pet => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
          <img src="${pet.foto_pet1}" class="card-img-top mt-3" alt="Foto de ${pet.nome_pet}" style="width:190px; height:170px; object-fit:cover; margin: 2% auto;">
          <div class="card-body text-center">
            <h5 class="card-title">${pet.nome_pet}</h5>
            <p class="card-text">${pet.descricao}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Gênero: ${pet.sexo}</li>
            <li class="list-group-item">Raça: ${pet.raca}</li>
            <li class="list-group-item">Idade: ${pet.idade}</li>
          </ul>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => console.error('Erro ao carregar animais:', err));
}




//mostrar animais (tela homeusu)
function carregar_animais() {
  const container = document.getElementById("animais");
  container.innerHTML = ''; // limpa o conteúdo anterior

  fetch("http://10.26.45.39:3000/api/v1/pet/listar")
    .then(res => res.json())
    .then(dados => {
      let row;

      dados.forEach((pet, index) => {
        if (index % 4 === 0) {
          row = document.createElement('div');
          row.className = 'row mb-4 justify-content-center';
          container.appendChild(row);
        }

        const col = document.createElement('div');
        col.className = 'col-md-3 d-flex';

        col.innerHTML = `
          <div class="card w-100 h-100">
            <img src="${pet.foto_pet1}" class="card-img-top id="imagemPet" alt="Foto de ${pet.nome_pet}">
            <div class="card-body">
              <h5 class="card-title">${pet.nome_pet}</h5>
              <p class="card-text">${pet.descricao}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Gênero: ${pet.sexo}</li>
              <li class="list-group-item">Raça: ${pet.raca}</li>
              <li class="list-group-item">Idade: ${pet.idade}</li>
            </ul>
            <div class="card-body text-center">
              <button class="btn btn-outline-success" onclick='adotar_animais(${JSON.stringify(pet)})'>
                Quero Adotar
              </button>
            </div>
          </div>
        `;

        row.appendChild(col);
      });
    })
    .catch(erro => console.error('Erro ao carregar animais:', erro));
}



// interesse de adoção do usuario 
function adotar_animais(pet) {
  // Atualiza imagem
  document.getElementById('imagemPetModal').src = pet.foto_pet1 || 'img/default.jpg';

  // Atualiza nome
  document.getElementById('nomePetModal').textContent = pet.nome_pet || 'Nome do Pet';

  // Abre o modal
  const modal = new bootstrap.Modal(document.getElementById('exampleModaladotar'));
  modal.show();
}


/*
// Interesse de adoção do usuário
function adotar_animais() {
  const interesse_adocao = document.getElementById("adotar_interesse")
  let saida = ""

  fetch("http://10.26.45.39:3000/api/v1/pet/listar")
    .then(res => res.json())
    .then(dados => {
      dados.forEach(interesse => {
        saida += `
         <div class="row forminteresse">

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
           <img src="${interesse.foto_pet1}" alt="Pet de interesse" class="img-fluid rounded shadow">
                    <p class="mt-2"><strong>${interesse.nome_pet}</strong></p>
                  </div>

        </div>
      </div>
        `
      })
      interesse_adocao.innerHTML = saida
    })
    .catch(erro => console.error("Erro ao carregar pets para adoção:", erro));
}


 Interesse de adoção do usuário
function adotar_animais() {
  const interesse_adoção = document.getElementById("exampleModaladotar")
  let saida = ""

  fetch("http://10.26.45.39:3000/api/v1/pet/listar")
    .then(res => res.json())
    .then(dados => {
      dados.forEach(interesse => {
        saida += `
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Formulário de Interesse na Adoção</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-8">
                    <p>🐾 <strong>Bem-vindo(a) ao nosso Formulário de Interesse.</strong></p>
                    <p>Ficamos muito felizes por você ter dado o primeiro passo para adotar um pet! 🐶🐱</p>
                    <p>Queremos lembrar que o <strong>My Pet Friend</strong> apenas cede o espaço virtual para facilitar a adoção...</p>
                    <p>Após clicar em "Tenho interesse", a ONG terá até <strong>48h</strong> para entrar em contato.</p>
                  </div>
                  <div class="col-md-4 text-center">
                    <img src="img/${interesse.img_pet}.jpg" alt="Pet de interesse" class="img-fluid rounded shadow">
                    <p class="mt-2"><strong>${interesse.nome_pet}</strong></p>
                  </div>
                </div>
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-success">Tenho interesse</button>
              </div>
            </div>
          </div>
        `
      })
      interesse_adoção.innerHTML = saida
    })
    .then(() => notificacao_adocao())
    .catch(erro => console.error(erro))
}


/*

// interesse de adoção do usuario

function adotar_animais() {
  const interesse_adoção = document.getElementById("exampleModaladotar");
  let saida = "";

  fetch("http://10.26.45.39:3000/api/v1/pet/listar")
    .then(res => res.json())
    .then(dados => {
      dados.forEach(interesse => {
        saida += `
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Formulário de Interesse na Adoção</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-8">
                    <p>🐾 <strong>Bem-vindo(a) ao nosso Formulário de Interesse.</strong></p>
                    <p>Ficamos muito felizes por você ter dado o primeiro passo para adotar um pet! 🐶🐱</p>
                    <p>Queremos lembrar que o <strong>My Pet Friend</strong> apenas cede o espaço virtual para facilitar a adoção. Os pets, as entrevistas e o processo de adoção são de inteira responsabilidade das ONGs e protetores parceiros, tudo bem?</p>
                    <p>Após clicar no botão de "Tenho interesse", a ONG/protetor terá até <strong>48h para entrar em contato</strong>.</p>
                  </div>
                  <div class="col-md-4 text-center">
                    <img src="img/${interesse.foto_pet1 || 'dog2.jpg'}" alt="Pet de interesse" class="img-fluid rounded shadow">
                    <p class="mt-2"><strong>${interesse.nome_pet}</strong></p>
                  </div>
                </div>
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-success">Tenho interesse</button>
              </div>
            </div>
          </div>`;
      });

      interesse_adoção.innerHTML = saida;
    })
    .catch(erro => console.error("Erro ao carregar animais no modal:", erro));
}
  /*  
// para ongs
function notificacao_adocao() {
  const notificacoes = document.getElementById("notificacao");
  let saida = "";

  fetch("http://10.26.45.39:3000/api/v1/pet/listar")
    .then(res => res.json())
    .then(dados => {
      dados.forEach(pets => {
        saida += `
          <div class="row">
            <div class="col-md-4 text-center">
              <img src="img/dog2.jpg" alt="Pet" style="width: 60px; height: 90px;">
              <img src="img/dog3.jpg" alt="Pet" style="width: 60px; height: 90px;">
            </div>
            <div class="col-md-8 d-flex flex-column justify-content-center">
              <p><strong>O usuário ${pets.nome_usu || "Desconhecido"} demonstrou interesse pelo ${pets.nome_pet}!</strong></p>
              <p>Entre em contato para prosseguir com a adoção!</p>
              <div class="d-flex gap-3 align-items-center">
                <a href="tel:+55${pets.telefone_residencial || '11999999999'}">
                  <img src="img/icon_telefone.png" alt="Telefone" width="32">
                </a>
                <a href="mailto:${pets.email || 'email@exemplo.com'}">
                  <img src="img/icon_email.png" alt="Email" width="32">
                </a>
                <a href="https://wa.me/${pets.telefone_celular || '11999999999'}" target="_blank">
                  <img src="img/icon_whatsapp.png" alt="WhatsApp" width="32">
                </a>
              </div>
            </div>
          </div><hr>`;
      });

      notificacoes.innerHTML = saida;
    })
    .catch((erro) => console.error("Erro ao carregar notificações:", erro));
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
    */
    function efetuarlogin() {
      const usuario = document.getElementById("txtusuario");
      const senha = document.getElementById("txtpassword");
    
      fetch("http://10.26.45.39:3000/api/v1/usuario/login", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json"
        },
        body: JSON.stringify({
          usuario: usuario.value,
          senha: senha.value
        })
      })
        .then((res) => {
          if (!res.ok) throw new Error("Usuário ou senha inválidos");
          return res.json();
        })
        .then((dados) => {
          window.localStorage.setItem("usuario_logado", JSON.stringify(dados));
          usuario.value = "";
          senha.value = "";
          window.location.reload();
        })
        .catch((erro) => {
          console.error(erro);
          alert("Erro no login: " + erro.message);
        });
    }
      


    // Cadastro do Usuário ###################################################################################

   
    async function efetuarCadastroCompleto() {
      const nome = document.getElementById("nomeCompleto").value;
      const cpf = document.getElementById("cpf").value;
      const nascimento = document.getElementById("nascimento").value;
      const senha = document.getElementById("senhaUsuario").value;
    
      const telefoneRes = document.getElementById("telFixo").value;
      const telefoneCel = document.getElementById("telCelular").value;
      const telefoneCom = null;
      const email = document.getElementById("email").value;
    
      const cep = document.getElementById("cep").value;
      const logradouro = document.getElementById("logradouro").value;
      const bairro = document.getElementById("bairro").value;
      const cidade = document.getElementById("cidade").value;
      const estado = document.getElementById("estado").value;
      const numero = document.getElementById("numero").value;
      const complemento = document.getElementById("complemento").value;
    
      const fotoUsuario = document.getElementById("foto_Usuario").files[0];
    
      try {
        const usuarioCompleto = {
          nome_usu: nome,
          cpf_usu: cpf,
          data_nascimento: nascimento,
          senha: senha,
          foto_usu: fotoUsuario ? fotoUsuario.name : null,
          preferencia: 37,
    
          cep,
          logradouro,
          bairro,
          cidade,
          estado,
          numero,
          complemento: complemento || null,
    
          telefone_celular: telefoneCel,
          telefone_residencial: telefoneRes || null,
          telefone_comercial: telefoneCom,
          email
        };
    
        console.log("Enviando tudo no corpo:", usuarioCompleto);
    
        const res = await fetch("http://10.26.45.39:3000/api/v1/usuario/cadastro", {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json"
          },
          body: JSON.stringify(usuarioCompleto)
        });
    
        const dados = await res.json();
        console.log("Resposta do backend:", dados);
    
        if (!res.ok) throw new Error(dados.message || "Erro ao cadastrar");
    
        const insertId = dados.insertId || dados.id;
        if (insertId) {
          localStorage.setItem("id_usuario_cadastrado", insertId);
          console.log("ID do usuário salvo no localStorage:", insertId);
        } else {
          console.warn("ID de usuário não retornado pelo backend.");
        }
    
        alert("Cadastro realizado com sucesso!");
        document.getElementById("cadastroForm").reset();
      } catch (erro) {
        console.error("Erro no cadastro:", erro);
        alert("Erro ao cadastrar. Verifique os dados e tente novamente.");
      }
    }
    
    