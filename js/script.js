// ===== PRECISION ARCHITECT - SCRIPT =====

// Saudação dinâmica
function exibirSaudacao() {
  const hora = new Date().getHours();
  let saudacao = "";
  if (hora < 12) saudacao = "// Bom dia, usuário.";
  else if (hora < 18) saudacao = "// Boa tarde, usuário.";
  else saudacao = "// Boa noite, usuário.";

  const saudacaoEl = document.getElementById("saudacao");
  if (saudacaoEl) {
    saudacaoEl.innerText = `${saudacao} Bem-vindo ao meu sistema.`;
  }
}

// Alternar tema com persistência
function alternarTema() {
  document.body.classList.toggle("tema-claro");
  const isClaro = document.body.classList.contains("tema-claro");
  localStorage.setItem("tema", isClaro ? "claro" : "escuro");
}

// Configurar tema ao carregar
function configurarTema() {
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "claro") {
    document.body.classList.add("tema-claro");
  }
}

// Validação do formulário
function configurarFormulario() {
  const form = document.getElementById("formContato");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    const nome = document.getElementById("nome")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const mensagem = document.getElementById("mensagem")?.value.trim();

    if (!nome || !email || !mensagem) {
      e.preventDefault();
      alert("╳ Erro: Preencha todos os campos antes de enviar.");
    } else {
      e.preventDefault();
      alert("✓ Proposta enviada com sucesso. Responderei em até 24h.");
      form.reset();
    }
  });
}

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  exibirSaudacao();
  configurarTema();

  const btnTema = document.getElementById("btnTema");
  if (btnTema) {
    btnTema.addEventListener("click", alternarTema);
  }

  configurarFormulario();
});