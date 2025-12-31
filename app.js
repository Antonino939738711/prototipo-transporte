const modal = document.getElementById("modal");
const titulo = document.getElementById("modalTitulo");
const conteudo = document.getElementById("modalConteudo");

function mostrar(tipo) {
  modal.classList.remove("hidden");

  if (tipo === "transporte") {
    titulo.innerText = "Solicitar Transporte";
    conteudo.innerHTML = `
      <input class="border w-full p-2 mb-2" placeholder="Origem">
      <input class="border w-full p-2 mb-2" placeholder="Destino">
      <input class="border w-full p-2 mb-2" placeholder="Tipo de mercadoria">
      <button class="bg-green-600 text-white px-4 py-2 rounded w-full">
        Solicitar
      </button>
    `;
  }

  if (tipo === "aluguer") {
    titulo.innerText = "Carrinhas Disponíveis";
    conteudo.innerHTML = `
      <ul class="space-y-2">
        <li class="border p-2 rounded">Carrinha Toyota Hiace</li>
        <li class="border p-2 rounded">Carrinha Hyundai H100</li>
      </ul>
    `;
  }

  if (tipo === "viaturas") {
    titulo.innerText = "Compra & Venda";
    conteudo.innerHTML = `
      <p>Viaturas disponíveis:</p>
      <ul class="mt-2 space-y-2">
        <li class="border p-2 rounded">Toyota Hilux - 8.500.000 Kz</li>
        <li class="border p-2 rounded">Ford Ranger - 9.200.000 Kz</li>
      </ul>
    `;
  }

  if (tipo === "tracking") {
    titulo.innerText = "Acompanhamento";
    conteudo.innerHTML = `
      <p>Status do pedido:</p>
      <p class="mt-2 font-bold text-green-600">Em transporte 🚚</p>
    `;
  }

  if (tipo === "avaliar") {
    titulo.innerText = "Avaliar Serviço";
    conteudo.innerHTML = `
      <select class="border w-full p-2 mb-2">
        <option>⭐</option>
        <option>⭐⭐</option>
        <option>⭐⭐⭐</option>
        <option>⭐⭐⭐⭐</option>
        <option>⭐⭐⭐⭐⭐</option>
      </select>
      <textarea class="border w-full p-2" placeholder="Comentário"></textarea>
    `;
  }
}

function fechar() {
  modal.classList.add("hidden");
}

function abrirPerfil() {
  mostrar("perfil");
  titulo.innerText = "Perfil do Usuário";
  conteudo.innerHTML = `
    <p><strong>Nome:</strong> Cliente Exemplo</p>
    <p><strong>Email:</strong> cliente@email.com</p>
  `;
}
