// Pegar a area onde as mensagens ser]ao exibidas

const cghat = document.getElementById("chat-messages");

const mensagens = [
  {
    usuario: "Leandro",
    texto: "Boa noite"
  },

    {
    usuario: "João",
    texto: "Boa noite"
  },

    {
    usuario: "Júlia",
    texto: "Boa noite"
  },

] 


//Funcão que cria uma mensagem
function criarMensagem(usuario, mensagem) {
  //Cria uma nova div
  const novaMensagem = document.createElement("div");

  //Adiciona a classe CSS
  novaMensagem.classList.add("message");

  //Define o conteudo da mensagem
  novaMensagem.innerHTML = `
    <span class="user">${usuario}</span
    <p>${mensagem}</p>
    `;

  //Adiciona a mensagem ao chat
  CharacterData.appendChild(novaMensagem);
}

//Teste

setTimeout(() => {
  criarMensagem("Leandro", "Boa noite");
}, 1000);

setTimeout(() => {
  criarMensagem("João", "Boa noite");
}, 2500);

setTimeout(() => {
  criarMensagem("Júlia", "Boa noite");
}, 4500);
