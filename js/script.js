// ===========================================================
// JACRÉ — script.js
// Menu hambúrguer + validação e exibição do formulário de contato
// ===========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- MENU HAMBÚRGUER ---------- */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // fecha o menu ao clicar em um link (útil no mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- MARCA O LINK ATIVO DO MENU ---------- */
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });

  /* ---------- IMPEDIR ROLAGEM DE PÁGINA PELAS SETAS NO JOGO ---------- */
  const gameWrap = document.querySelector('.game-frame-wrap');
  if (gameWrap) {
    window.addEventListener('keydown', (e) => {
      const keysToBlock = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', ' ', 'PageUp', 'PageDown'];
      if (keysToBlock.includes(e.key) || [32, 33, 34, 37, 38, 39, 40].includes(e.keyCode)) {
        const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
        if (activeTag !== 'input' && activeTag !== 'textarea') {
          e.preventDefault();
        }
      }
    }, false);

    const gameIframe = gameWrap.querySelector('iframe');
    if (gameIframe) {
      gameWrap.addEventListener('click', () => {
        gameIframe.focus();
      });
    }
  }

  /* ---------- FORMULÁRIO DE CONTATO ---------- */
  const form = document.getElementById('contato-form');
  if (!form) return;

  const confirmBox = document.getElementById('confirm-box');

  const fields = {
    nome: { el: document.getElementById('nome'), validate: v => v.trim().length >= 3, msg: 'Digite seu nome completo (mínimo 3 letras).' },
    email: { el: document.getElementById('email'), validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), msg: 'Digite um e-mail válido, ex: nome@exemplo.com.' },
    assunto: { el: document.getElementById('assunto'), validate: v => v.trim().length > 0, msg: 'Selecione o assunto do contato.' },
    mensagem: { el: document.getElementById('mensagem'), validate: v => v.trim().length >= 10, msg: 'Conte com um pouco mais de detalhe (mínimo 10 caracteres).' },
  };

  function validateField(key) {
    const { el, validate } = fields[key];
    const wrapper = el.closest('.field');
    const ok = validate(el.value);
    wrapper.classList.toggle('invalid', !ok);
    return ok;
  }

  // valida em tempo real, ao sair do campo
  Object.keys(fields).forEach(key => {
    const el = fields[key].el;
    el.addEventListener('blur', () => validateField(key));
    el.addEventListener('input', () => {
      if (el.closest('.field').classList.contains('invalid')) validateField(key);
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let allValid = true;
    Object.keys(fields).forEach(key => {
      if (!validateField(key)) allValid = false;
    });

    if (!allValid) {
      confirmBox.classList.remove('show');
      const firstInvalid = form.querySelector('.field.invalid input, .field.invalid textarea, .field.invalid select');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // dados digitados pelo usuário
    const dados = {
      nome: fields.nome.el.value.trim(),
      email: fields.email.el.value.trim(),
      assunto: fields.assunto.el.value,
      mensagem: fields.mensagem.el.value.trim(),
    };

    // mostra os dados digitados no corpo da página
    document.getElementById('out-nome').textContent = dados.nome;
    document.getElementById('out-email').textContent = dados.email;
    document.getElementById('out-assunto').textContent = dados.assunto;
    document.getElementById('out-mensagem').textContent = dados.mensagem;
    confirmBox.classList.add('show');
    confirmBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // também confirma em uma janela de alerta, como reforço
    alert('Mensagem enviada!\n\nNome: ' + dados.nome + '\nAssunto: ' + dados.assunto);

    form.reset();
    Object.keys(fields).forEach(key => fields[key].el.closest('.field').classList.remove('invalid'));
  });
});
