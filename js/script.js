// Área onde as mensagens serão exibidas
const chatContainer = document.getElementById("chat-messages");

// Lista de mensagens de teste
const mensagens = [
  {
    usuario: "🦫 Leandro",
    texto: "Boa noite!",
  },
  {
    usuario: "☕ Ana",
    texto: "Vamos estudar!",
  },
  {
    usuario: "📚 Carlos",
    texto: "Foco total!",
  },
];

// Cria uma mensagem no chat
function criarMensagem(usuario, texto) {
  const message = document.createElement("div");

  message.classList.add("message");

  message.innerHTML = `
        <span class="user">${usuario}</span>
        <p>${texto}</p>
    `;

  chatContainer.appendChild(message);
}

// Percorre toda a lista de mensagens
mensagens.forEach((mensagem) => {
  criarMensagem(mensagem.usuario, mensagem.texto);
});
