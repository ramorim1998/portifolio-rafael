// Mostra uma saudação com base no horário do dia
document.addEventListener("DOMContentLoaded", function () {
  const hora = new Date().getHours();
  let saudacao = "Olá!";
  if (hora < 12) saudacao = "Bom dia!";
  else if (hora < 18) saudacao = "Boa tarde!";
  else saudacao = "Boa noite!";
  const saudacaoEl = document.getElementById("saudacao");
  if (saudacaoEl) saudacaoEl.innerText = saudacao + " Bem-vindo ao meu portfólio!";
});

// Alterna o tema do site entre claro e escuro
function alternarTema() {
  document.body.classList.toggle("escuro");
}

// Validação do formulário de contato
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const msg = document.getElementById("mensagem").value.trim();
      if (!nome || !email || !msg) {
        e.preventDefault();
        alert("Por favor, preencha todos os campos.");
      } else {
        alert("Mensagem enviada com sucesso (simulado)!");
      }
    });
  }
});

// Animação simples no título
document.addEventListener("DOMContentLoaded", function () {
  const titulo = document.querySelector("h1");
  if (titulo) {
    setInterval(() => {
      titulo.style.color = titulo.style.color === "black" ? "#3498db" : "black";
    }, 1000);
  }
});