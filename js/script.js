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

// ===== INTERNACIONALIZAÇÃO (i18n) =====
const translations = {
  pt: {
    // Navegação
    "nav-sobre": "Sobre",
    "nav-formacao": "Formação",
    "nav-portfolio": "Portfólio",
    "nav-contato": "Contato",
    // Página Sobre
    "sobre-titulo": "Rafael Araújo Amorim",
    "sobre-subtitulo": "Desenvolvedor Fullstack | Backend Java | Sistemas Interativos",
    "sobre-desc1": "Sou desenvolvedor com sólida experiência prática em <strong>Java, Spring Boot e Angular</strong>, atuando na construção de APIs REST, integração de sistemas e desenvolvimento de dashboards com visualização de dados. Minha abordagem combina arquitetura em camadas, validação robusta e foco em soluções funcionais e seguras.",
    "sobre-desc2": "Paralelamente, possuo experiência em <strong>game development com Unity (C#) e Fortnite Creative (Verse)</strong>, o que fortalece meu raciocínio lógico, modelagem de estados e programação orientada a eventos — um diferencial aplicado também a sistemas corporativos.",
    "sobre-desc3": "Como empreendedor à frente da <strong>FlairTech</strong>, presto consultoria e manutenção de computadores, desenvolvendo habilidades práticas de atendimento ao cliente, diagnóstico de problemas e soluções de otimização de sistemas.",
    "sobre-competencias": "Competências Técnicas",
    "sobre-comp1": "<strong>Backend:</strong> Java, Spring Boot, REST APIs, JPA/Hibernate",
    "sobre-comp2": "<strong>Frontend:</strong> Angular, TypeScript, HTML5, CSS3",
    "sobre-comp3": "<strong>Game Dev:</strong> Unity (C#), Verse (Fortnite Creative)",
    "sobre-comp4": "<strong>Ferramentas:</strong> Git, GitHub, Postman, VS Code",
    "sobre-comp5": "<strong>Conceitos:</strong> Integração de sistemas, validação de dados, lógica de negócio, visualização de dados",
    "sobre-perfil": "Perfil Pessoal",
    "sobre-perfil-desc": "Valorizo a evolução contínua, tanto técnica quanto pessoal. Tenho mentalidade prática e orientada a resultados, aprendo rápido e aplico conhecimento em problemas reais. Fora da programação, pratico musculação e Muay Thai, cultivo interesses em mecânica, cultura nerd e criação de experiências interativas.",
    // Página Formação
    "formacao-titulo": "Formação Acadêmica e Complementar",
    "formacao-graduacao-titulo": "🎓 Graduação",
    "formacao-graduacao-desc": "<strong>Análise e Desenvolvimento de Sistemas</strong> (em andamento)<br>Foco em desenvolvimento web, arquitetura de software, segurança da informação e boas práticas de engenharia de software.",
    "formacao-idiomas-titulo": "🌐 Idiomas",
    "formacao-idioma1": "Português: Nativo",
    "formacao-idioma2": "Inglês: Intermediário (B1/B2) – Leitura técnica e comunicação profissional",
    "formacao-idioma3": "Espanhol: Básico",
    "formacao-idioma4": "Francês: Iniciante",
    "formacao-cursos-titulo": "📘 Cursos Complementares",
    "formacao-curso1": "<strong>Spring Boot Expert</strong> – APIs REST, segurança, JPA, boas práticas",
    "formacao-curso2": "<strong>Angular + TypeScript</strong> – Componentes, serviços, consumo de APIs",
    "formacao-curso3": "<strong>Segurança da Informação</strong> – OWASP, HTTPS, criptografia básica",
    "formacao-curso4": "<strong>Unity & C#</strong> – Lógica de jogos, eventos, física e UI",
    // Página Portfólio
    "portfolio-titulo": "Portfólio Profissional",
    "portfolio-desc": "Projetos reais que demonstram minha experiência em backend robusto, integração de sistemas, visualização de dados e lógica aplicada.",
    "portfolio-destaques": "Projetos em Destaque",
    "portfolio-empreendedor": "Experiência Empreendedora",
    "portfolio-tecnologias": "Tecnologias Utilizadas",
    // Projeto 1 - Sistema de Times (Backend)
    "proj1-titulo": "Sistema de Gerenciamento de Times e Placar em Tempo Real - Backend",
    "proj1-desc": "API REST desenvolvida em Spring Boot para controle de equipes e atualização de placares em partidas.",
    "proj1-item1": "Cadastro e gerenciamento de times/jogadores",
    "proj1-item2": "Atualização síncrona de placar",
    "proj1-item3": "Controle de estado de partidas",
    "proj1-item4": "Consistência e sincronização de dados",
    // Projeto 2 - Portal de Horas (Frontend)
    "proj2-titulo": "Portal de Apontamentos de Horas - Frontend",
    "proj2-desc": "Dashboard em Angular para gestão de horas trabalhadas com visualização analítica.",
    "proj2-item1": "Filtros por período (mensal)",
    "proj2-item2": "Gráficos interativos com ngx-charts",
    "proj2-item3": "Integração com API REST",
    "proj2-item4": "Otimização de requisições",
    // Projeto 3 - KeyValidator Frontend
    "proj3-titulo": "KeyValidator - Frontend",
    "proj3-desc": "Interface web para sistema de validação de chaves com regras de integridade e checksum.",
    "proj3-item1": "Interface responsiva para validação de chaves",
    "proj3-item2": "Comunicação com API backend",
    "proj3-item3": "Feedback visual de validação",
    "proj3-item4": "Design system consistente",
    // Projeto 4 - KeyValidator Backend
    "proj4-titulo": "KeyValidator - Backend",
    "proj4-desc": "API REST para validação de chaves com regras de integridade e checksum.",
    "proj4-item1": "Validação de formato e checksum",
    "proj4-item2": "Arquitetura RESTful",
    "proj4-item3": "Regras de validação robustas",
    "proj4-item4": "Tratamento de erros consistente",
    // Projeto 5 - Fortnite Verse
    "proj5-titulo": "Sistemas Interativos em Fortnite (Verse)",
    "proj5-desc": "Desenvolvimento de mecânicas multiplayer e lógica de eventos dentro do Fortnite Creative.",
    "proj5-item1": "Sistemas de missão e progressão",
    "proj5-item2": "Eventos multiplayer e controle de estado",
    "proj5-item3": "Performance e consistência em tempo real",
    // FlairTech
    "flairtech-desc": "Microempreendimento focado em manutenção de computadores e soluções tecnológicas.",
    "flairtech-item1": "Diagnóstico e reparo de hardware/software",
    "flairtech-item2": "Remoção de vírus e otimização de sistemas",
    "flairtech-item3": "Consultoria em programação e segurança",
    // Página Contato
    "contato-titulo": "Vamos conversar?",
    "contato-desc": "Se você tem um projeto, oportunidade ou apenas quer trocar ideias sobre tecnologia, fique à vontade para enviar uma mensagem.",
    "contato-label-nome": "Nome completo",
    "contato-label-email": "E-mail profissional",
    "contato-label-mensagem": "Mensagem",
    "contato-btn-enviar": "Enviar mensagem",
    // Saudação
    "saudacao-dia": "Bom dia",
    "saudacao-tarde": "Boa tarde",
    "saudacao-noite": "Boa noite",
    "saudacao-texto": "Bem-vindo ao meu sistema."
  },
  en: {
    "nav-sobre": "About",
    "nav-formacao": "Education",
    "nav-portfolio": "Portfolio",
    "nav-contato": "Contact",
    "sobre-titulo": "Rafael Araújo Amorim",
    "sobre-subtitulo": "Fullstack Developer | Backend Java | Interactive Systems",
    "sobre-desc1": "I am a developer with solid practical experience in <strong>Java, Spring Boot, and Angular</strong>, building REST APIs, system integration, and developing dashboards with data visualization. My approach combines layered architecture, robust validation, and a focus on functional and secure solutions.",
    "sobre-desc2": "Additionally, I have experience in <strong>game development with Unity (C#) and Fortnite Creative (Verse)</strong>, which strengthens my logical reasoning, state modeling, and event-driven programming — a differential also applied to corporate systems.",
    "sobre-desc3": "As an entrepreneur leading <strong>FlairTech</strong>, I provide computer consulting and maintenance, developing practical customer service skills, problem diagnosis, and system optimization solutions.",
    "sobre-competencias": "Technical Skills",
    "sobre-comp1": "<strong>Backend:</strong> Java, Spring Boot, REST APIs, JPA/Hibernate",
    "sobre-comp2": "<strong>Frontend:</strong> Angular, TypeScript, HTML5, CSS3",
    "sobre-comp3": "<strong>Game Dev:</strong> Unity (C#), Verse (Fortnite Creative)",
    "sobre-comp4": "<strong>Tools:</strong> Git, GitHub, Postman, VS Code",
    "sobre-comp5": "<strong>Concepts:</strong> System integration, data validation, business logic, data visualization",
    "sobre-perfil": "Personal Profile",
    "sobre-perfil-desc": "I value continuous evolution, both technical and personal. I have a practical and results-oriented mindset, learn quickly, and apply knowledge to real problems. Outside of programming, I practice bodybuilding and Muay Thai, with interests in mechanics, nerd culture, and creating interactive experiences.",
    "formacao-titulo": "Academic and Complementary Education",
    "formacao-graduacao-titulo": "🎓 Undergraduate Degree",
    "formacao-graduacao-desc": "<strong>Systems Analysis and Development</strong> (in progress)<br>Focus on web development, software architecture, information security, and software engineering best practices.",
    "formacao-idiomas-titulo": "🌐 Languages",
    "formacao-idioma1": "Portuguese: Native",
    "formacao-idioma2": "English: Intermediate (B1/B2) – Technical reading and professional communication",
    "formacao-idioma3": "Spanish: Basic",
    "formacao-idioma4": "French: Beginner",
    "formacao-cursos-titulo": "📘 Complementary Courses",
    "formacao-curso1": "<strong>Spring Boot Expert</strong> – REST APIs, security, JPA, best practices",
    "formacao-curso2": "<strong>Angular + TypeScript</strong> – Components, services, API consumption",
    "formacao-curso3": "<strong>Information Security</strong> – OWASP, HTTPS, basic cryptography",
    "formacao-curso4": "<strong>Unity & C#</strong> – Game logic, events, physics, and UI",
    "portfolio-titulo": "Professional Portfolio",
    "portfolio-desc": "Real projects demonstrating my experience in robust backend, system integration, data visualization, and applied logic.",
    "portfolio-destaques": "Highlighted Projects",
    "portfolio-empreendedor": "Entrepreneurial Experience",
    "portfolio-tecnologias": "Technologies Used",
    "proj1-titulo": "Team Management & Real-time Score System - Backend",
    "proj1-desc": "REST API developed with Spring Boot for team management and score updates in matches.",
    "proj1-item1": "Team/player registration and management",
    "proj1-item2": "Synchronous score updates",
    "proj1-item3": "Match state control",
    "proj1-item4": "Data consistency and synchronization",
    "proj2-titulo": "Hours Tracking Dashboard - Frontend",
    "proj2-desc": "Angular dashboard for work hours management with analytical visualization.",
    "proj2-item1": "Period filters (monthly)",
    "proj2-item2": "Interactive charts with ngx-charts",
    "proj2-item3": "REST API integration",
    "proj2-item4": "Request optimization",
    "proj3-titulo": "KeyValidator - Frontend",
    "proj3-desc": "Web interface for key validation system with integrity and checksum rules.",
    "proj3-item1": "Responsive interface for key validation",
    "proj3-item2": "Backend API communication",
    "proj3-item3": "Visual validation feedback",
    "proj3-item4": "Consistent design system",
    "proj4-titulo": "KeyValidator - Backend",
    "proj4-desc": "REST API for key validation with integrity and checksum rules.",
    "proj4-item1": "Format and checksum validation",
    "proj4-item2": "RESTful architecture",
    "proj4-item3": "Robust validation rules",
    "proj4-item4": "Consistent error handling",
    "proj5-titulo": "Interactive Systems in Fortnite (Verse)",
    "proj5-desc": "Development of multiplayer mechanics and event logic within Fortnite Creative.",
    "proj5-item1": "Quest and progression systems",
    "proj5-item2": "Multiplayer events and state control",
    "proj5-item3": "Real-time performance and consistency",
    "flairtech-desc": "Micro-business focused on computer maintenance and technological solutions.",
    "flairtech-item1": "Hardware/software diagnosis and repair",
    "flairtech-item2": "Virus removal and system optimization",
    "flairtech-item3": "Programming and security consulting",
    "contato-titulo": "Let's talk?",
    "contato-desc": "If you have a project, opportunity, or just want to exchange ideas about technology, feel free to send a message.",
    "contato-label-nome": "Full name",
    "contato-label-email": "Professional email",
    "contato-label-mensagem": "Message",
    "contato-btn-enviar": "Send message",
    "saudacao-dia": "Good morning",
    "saudacao-tarde": "Good afternoon",
    "saudacao-noite": "Good evening",
    "saudacao-texto": "Welcome to my system."
  }
};

let currentLang = 'pt';

function updateSaudacao() {
  const hora = new Date().getHours();
  let saudacaoKey = "";
  if (hora < 12) saudacaoKey = "saudacao-dia";
  else if (hora < 18) saudacaoKey = "saudacao-tarde";
  else saudacaoKey = "saudacao-noite";

  const saudacaoEl = document.getElementById("saudacao");
  if (saudacaoEl) {
    const saudacaoText = translations[currentLang][saudacaoKey] || translations.pt[saudacaoKey];
    const welcomeText = translations[currentLang]["saudacao-texto"] || translations.pt["saudacao-texto"];
    saudacaoEl.innerText = `// ${saudacaoText}, user. ${welcomeText}`;
  }
}

function updatePageLanguage() {
  // Atualiza todos os elementos com data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      if (el.innerHTML && (el.innerHTML.includes('<strong>') || el.innerHTML.includes('<br>'))) {
        // Preserva HTML para elementos que podem ter formatação
        el.innerHTML = translations[currentLang][key];
      } else {
        el.innerText = translations[currentLang][key];
      }
    }
  });
  updateSaudacao();
  
  // Atualiza botão ativo
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function initI18n() {
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentLang = btn.getAttribute('data-lang');
      localStorage.setItem('preferredLanguage', currentLang);
      updatePageLanguage();
    });
  });
  
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
    currentLang = savedLang;
  }
  updatePageLanguage();
}

// ===== FORMULÁRIO DE CONTATO =====
function configurarFormulario() {
  const form = document.getElementById("formContato");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    const nome = document.getElementById("nome")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const mensagem = document.getElementById("mensagem")?.value.trim();

    if (!nome || !email || !mensagem) {
      e.preventDefault();
      alert(currentLang === 'pt' ? "╳ Erro: Preencha todos os campos antes de enviar." : "╳ Error: Please fill in all fields before submitting.");
    } else {
      e.preventDefault();
      alert(currentLang === 'pt' ? "✓ Proposta enviada com sucesso. Responderei em até 24h." : "✓ Proposal sent successfully. I will respond within 24h.");
      form.reset();
    }
  });
}

// ===== INICIALIZAÇÃO =====
document.addEventListener("DOMContentLoaded", function () {
  exibirSaudacao();
  initI18n();
  configurarFormulario();
});