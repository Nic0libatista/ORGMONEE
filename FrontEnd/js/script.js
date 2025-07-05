// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
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

function carregar_animais(){
    const livros_novidades = document.getElementById("animais")
    let saida ="";
    fetch("http://127.0.0.1:5000/api/v1/pet/listar")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((pets)=>{
            saida +=`<div class="animaiss">              
                <div class="card" style="width: 15rem; ">
                <img src="{pets.foto1}" class="card-img-top" alt="...">
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
        livros_novidades.innerHTML=saida;
    })
    carregar_maisvendidos();
}

