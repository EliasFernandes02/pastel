const pasteis = [
  {
    id: 1,
    nome: "Pastel de Palmito",
    preco: 7.50,
    ingredientes: "Palmito, Cebola, Azeitona, Temperos",
    tamanho: "Médio"
  },
  {
    id: 2,
    nome: "Pastel de Pizza",
    preco: 8.00,
    ingredientes: "Presunto, Mussarela, Tomate, Orégano",
    tamanho: "Grande"
  },
  {
    id: 3,
    nome: "Pastel de Carne Seca com Catupiry",
    preco: 9.00,
    ingredientes: "Carne seca, Catupiry, Cebola",
    tamanho: "Grande"
  },
  {
    id: 4,
    nome: "Pastel de Bacalhau",
    preco: 10.00,
    ingredientes: "Bacalhau, Batata, Cebola, Azeitona",
    tamanho: "Grande"
  },
  {
    id: 5,
    nome: "Pastel de Banana com Canela",
    preco: 6.50,
    ingredientes: "Banana, Canela, Açúcar",
    tamanho: "Médio"
  },
  {
    id: 6,
    nome: "Pastel de Doce de Leite",
    preco: 7.00,
    ingredientes: "Doce de leite, Chocolate branco",
    tamanho: "Pequeno"
  },
  {
    id: 7,
    nome: "Pastel de Queijo com Orégano",
    preco: 6.50,
    ingredientes: "Mussarela, Orégano",
    tamanho: "Médio"
  },
  {
    id: 8,
    nome: "Pastel de Frango com Requeijão",
    preco: 8.50,
    ingredientes: "Frango desfiado, Requeijão, Cebola",
    tamanho: "Médio"
  },
  {
    id: 9,
    nome: "Pastel de Camarão",
    preco: 11.00,
    ingredientes: "Camarão, Requeijão, Cebola, Salsinha",
    tamanho: "Grande"
  },
  {
    id: 10,
    nome: "Pastel de Chocolate com Morango",
    preco: 9.50,
    ingredientes: "Chocolate ao leite, Morango, Granulado",
    tamanho: "Médio"
  },
  {
    id: 11,
    nome: "Pastel de vento",
    preco: 5.50,
    ingredientes: "Vento e massa",
    tamanho: "Grande"
}
];

let body = document.querySelector("body")
function renderProducts() {
    let container = document.querySelector("#card-container")
    container.innerHTML = ""

    for (let index = 0; index < pasteis.length; index++) {
        let pastel = pasteis[index]

        let col = document.createElement("div")
        col.classList.add("col-md-4")

        col.innerHTML = `
            <div class="card h-100 shadow-sm"> 
                <div class="card-body">
                    <h5 class="card-title">${pastel.nome}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">R$ ${pastel.preco}</h6>

                    <p class="card-text">
                        <strong>Ingredientes:</strong><br>
                        ${pastel.ingredientes}
                    </p>

                    <p class="card-text">
                        <strong>Tamanho:</strong> ${pastel.tamanho}
                    </p>
                </div>

                <div class="card-footer d-flex justify-content-between">
                    <button class="btn btn-warning btn-sm" onclick="renderEditModal(${pastel.id})">
                        Editar
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deletarPasteis(${pastel.id})">
                        Excluir
                    </button>
                </div>
            </div>
        `

        container.appendChild(col)
    }
}
renderProducts()

function deletarPasteis(id) {
  let tbody = document.querySelector("tbody")
  let pastel = pasteis.findIndex((pastel) => pastel.id === id)
  pasteis.splice(pastel,1)
  tbody.innerHTML = ""
  renderProducts()
}

function renderEditModal(id) {
    let pastel = pasteis.find((pastel) => pastel.id === id)
    let div = document.createElement("div")
    div.classList.add("modal-overlay")
    div.innerHTML = `
        <div id="createModal" class="modal-content">
          <form action="">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Digite seu nome" aria-label="Id" aria-describedby="basic-addon1" id="editNome" value ="${pastel.nome}">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Digite seu preço" aria-label="Id" aria-describedby="basic-addon1" id="editPreco" value ="${pastel.preco}">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Digite seu ingredientes" aria-label="Id" aria-describedby="basic-addon1" id="editIngredientes" value ="${pastel.ingredientes}">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Digite seu tamanho" aria-label="Id" aria-describedby="basic-addon1" id="editTamanho" value ="${pastel.tamanho}">
            </div>
          </form>

        <div id="div-buttons">
          <button onclick="removeModal()" type="button" class="btn btn-secondary">Fechar</button>

          <button type="button" onclick="editarPastel(${pastel.id})" class="btn btn-primary">Enviar</button>
        </div>
        </div>
    `
    body.appendChild(div)
}

function editarPastel(id) {
    let pastel = pasteis.findIndex((pastel) => pastel.id === id)
    let nome = document.querySelector("#editNome").value
    let preco = document.querySelector("#editPreco").value
    let ingredientes = document.querySelector("#editIngredientes").value
    let tamanho = document.querySelector("#editTamanho").value

}

function renderModal() {
    let div = document.createElement("div")
    div.classList.add("modal-overlay")
    div.innerHTML = `
        <div id="createModal" class="modal-content">
          <form action="">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Digite seu nome" aria-label="Id" aria-describedby="basic-addon1" id="inputNome">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Digite seu preço" aria-label="Id" aria-describedby="basic-addon1" id="inputPreco">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Digite seu ingredientes" aria-label="Id" aria-describedby="basic-addon1" id="inputIngredientes">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Digite seu tamanho" aria-label="Id" aria-describedby="basic-addon1" id="inputTamanho">
            </div>
          </form>

        <div id="div-buttons">
          <button onclick="removeModal()" type="button" class="btn btn-secondary">Fechar</button>

          <button type="button" onclick="criarPastel()" class="btn btn-primary">Enviar</button>
        </div>
        </div>
    `
    body.appendChild(div)
}

function removeModal() {
  let createModal = document.querySelector(".modal-overlay")
  body.removeChild(createModal)
}


function criarPastel()  {
    let nome = document.querySelector("#inputNome").value
    let preco = document.querySelector("#inputPreco").value
    let ingredientes = document.querySelector("#inputIngredientes").value
    let tamanho = document.querySelector("#inputTamanho").value
    let tbody = document.querySelector("tbody")
    let createModal = document.querySelector("#createModal")

    if(nome==="" || preco==="" || ingredientes==="" || tamanho==="") {
        createModal.innerHTML += `
          <p style="color:red;">Digite valores válidos</p>
        `
        return
    }

    pasteis.push({
      id:pasteis.length+1,
      nome:nome,
      preco:preco,
      ingredientes:ingredientes,
      tamanho:tamanho
    })

    removeModal()
    tbody.innerHTML = ""
    renderProducts()
    
}


