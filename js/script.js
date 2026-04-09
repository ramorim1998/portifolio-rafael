// Função para exibir saudação dinâmica
function exibirSaudacao() {
  const hora = new Date().getHours();
  let saudacao = "";
  if (hora < 12) saudacao = "Bom dia!";
  else if (hora < 18) saudacao = "Boa tarde!";
  else saudacao = "Boa noite!";

  const saudacaoEl = document.getElementById("saudacao");
  if (saudacaoEl) {
    saudacaoEl.innerText = `${saudacao} Bem-vindo(a) ao meu portfólio profissional.`;
  }
}

// Função para alternar tema com persistência
function alternarTema() {
  document.body.classList.toggle("escuro");
  const isEscuro = document.body.classList.contains("escuro");
  localStorage.setItem("tema", isEscuro ? "escuro" : "claro");
}

// Validação do formulário de contato
function configurarFormulario() {
  const form = document.getElementById("formContato");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    const nome = document.getElementById("nome")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const mensagem = document.getElementById("mensagem")?.value.trim();

    if (!nome || !email || !mensagem) {
      e.preventDefault();
      alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
      e.preventDefault();
      alert("Mensagem enviada com sucesso (simulação). Em breve retornarei o contato.");
      form.reset();
    }
  });
}

// Inicialização ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  exibirSaudacao();

  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    document.body.classList.add("escuro");
  }

  const btnTema = document.getElementById("btnTema");
  if (btnTema) {
    btnTema.addEventListener("click", alternarTema);
  }

  configurarFormulario();
});