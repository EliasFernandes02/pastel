const pasteis = [
  { id: 1, nome: "Pastel de Palmito", preco: 7.50, ingredientes: "Palmito, Cebola, Azeitona, Temperos", tamanho: "Médio" },
  { id: 2, nome: "Pastel de Pizza", preco: 8.00, ingredientes: "Presunto, Mussarela, Tomate, Orégano", tamanho: "Grande" },
  { id: 3, nome: "Pastel de Carne Seca com Catupiry", preco: 9.00, ingredientes: "Carne seca, Catupiry, Cebola", tamanho: "Grande" },
  { id: 4, nome: "Pastel de Bacalhau", preco: 10.00, ingredientes: "Bacalhau, Batata, Cebola, Azeitona", tamanho: "Grande" },
  { id: 5, nome: "Pastel de Banana com Canela", preco: 6.50, ingredientes: "Banana, Canela, Açúcar", tamanho: "Médio" },
  { id: 6, nome: "Pastel de Doce de Leite", preco: 7.00, ingredientes: "Doce de leite, Chocolate branco", tamanho: "Pequeno" },
  { id: 7, nome: "Pastel de Queijo com Orégano", preco: 6.50, ingredientes: "Mussarela, Orégano", tamanho: "Médio" },
  { id: 8, nome: "Pastel de Frango com Requeijão", preco: 8.50, ingredientes: "Frango desfiado, Requeijão, Cebola", tamanho: "Médio" },
  { id: 9, nome: "Pastel de Camarão", preco: 11.00, ingredientes: "Camarão, Requeijão, Cebola, Salsinha", tamanho: "Grande" },
  { id: 10, nome: "Pastel de Chocolate com Morango", preco: 9.50, ingredientes: "Chocolate ao leite, Morango, Granulado", tamanho: "Médio" },
  { id: 11, nome: "Pastel de vento", preco: 5.50, ingredientes: "Vento e massa", tamanho: "Grande" }
]

function renderProducts() {
    const container = document.querySelector("#card-container")
    container.innerHTML = ""

    pasteis.map(pastel => {
        const col = document.createElement("div")
        col.classList.add("col-md-4")

        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="./image/logo.png">

                <div class="card-body">
                    <h5 class="card-title">${pastel.nome}</h5>
                    <h6 class="text-muted">
                        R$ ${parseFloat(pastel.preco).toFixed(2)}
                    </h6>

                    <p><strong>Ingredientes:</strong><br>${pastel.ingredientes}</p>
                    <p><strong>Tamanho:</strong> ${pastel.tamanho}</p>
                </div>

                <div class="card-footer d-flex justify-content-between">
                    <button class="btn btn-warning btn-sm"
                        onclick="renderEditModal(${pastel.id})">
                        Editar
                    </button>

                    <button class="btn btn-danger btn-sm"
                        onclick="deletarPasteis(${pastel.id})">
                        Excluir
                    </button>
                </div>
            </div>
        `

        container.appendChild(col)
    })
}

renderProducts()

function deletarPasteis(id) {
    let container = document.querySelector("#card-container")
    let pastel = pasteis.findIndex(p => p.id === id)

    pasteis.splice(pastel, 1)

    container.innerHTML = ""
    renderProducts()
}

function renderEditModal(id) {
    let pastel = pasteis.find(p => p.id === id)

    let div = document.createElement("div")
    div.classList.add("modal-overlay")

    div.innerHTML = `
        <div id="createModal" class="modal-content">
          <form>
            <input class="form-control mb-2" id="editNome" value="${pastel.nome}">
            <input class="form-control mb-2" id="editPreco" value="${pastel.preco}">
            <input class="form-control mb-2" id="editIngredientes" value="${pastel.ingredientes}">
            <input class="form-control mb-2" id="editTamanho" value="${pastel.tamanho}">
          </form>

          <div class="d-flex gap-2 mt-2">
            <button onclick="removeModal()" class="btn btn-secondary">Fechar</button>
            <button onclick="editarPastel(${pastel.id})" class="btn btn-primary">Salvar</button>
          </div>
        </div>
    `

    document.body.appendChild(div)
}

function editarPastel(id) {
    let index = pasteis.findIndex(p => p.id === id)

    pasteis[index] = {
        id,
        nome: document.querySelector("#editNome").value,
        preco: document.querySelector("#editPreco").value,
        ingredientes: document.querySelector("#editIngredientes").value,
        tamanho: document.querySelector("#editTamanho").value
    }

    removeModal()
    renderProducts()
}

function renderModal() {
    let div = document.createElement("div")
    div.classList.add("modal-overlay")

    div.innerHTML = `
        <div id="createModal" class="modal-content">
          <form>
            <input class="form-control mb-2" id="inputNome" placeholder="Nome">
            <input class="form-control mb-2" id="inputPreco" placeholder="Preço">
            <input class="form-control mb-2" id="inputIngredientes" placeholder="Ingredientes">
            <input class="form-control mb-2" id="inputTamanho" placeholder="Tamanho">
          </form>

          <div class="d-flex gap-2 mt-2">
            <button onclick="removeModal()" class="btn btn-secondary">Fechar</button>
            <button onclick="criarPastel()" class="btn btn-success">Criar</button>
          </div>
        </div>
    `

    document.body.appendChild(div)
}

function removeModal() {
    let modal = document.querySelector(".modal-overlay")
    if (modal) document.body.removeChild(modal)
}

function criarPastel() {
    let nome = document.querySelector("#inputNome").value
    let preco = document.querySelector("#inputPreco").value
    let ingredientes = document.querySelector("#inputIngredientes").value
    let tamanho = document.querySelector("#inputTamanho").value

    let createModal = document.querySelector("#createModal")

    if (!nome || !preco || !ingredientes || !tamanho) {
        createModal.innerHTML += `<p style="color:red;">Preencha todos os campos</p>`
        return
    }

    pasteis.push({
        id: pasteis.length + 1,
        nome,
        preco,
        ingredientes,
        tamanho
    })

    removeModal()
    renderProducts()
}