(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var aberto = nav.classList.toggle('aberto');
      btn.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      btn.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });
  }

  document.querySelectorAll('.tem-sub').forEach(function (item) {
    var t = item.querySelector('.sub-toggle');
    t.addEventListener('click', function (e) {
      e.stopPropagation();
      var aberto = item.classList.toggle('aberto');
      t.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.tem-sub.aberto').forEach(function (item) {
      if (!item.contains(e.target)) {
        item.classList.remove('aberto');
        item.querySelector('.sub-toggle').setAttribute('aria-expanded', 'false');
      }
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.tem-sub.aberto').forEach(function (item) {
        item.classList.remove('aberto');
        var t = item.querySelector('.sub-toggle');
        t.setAttribute('aria-expanded', 'false');
        t.focus();
      });
    }
  });


  /* Cabeçalho com sombra ao rolar */
  var topo = document.querySelector('.topo');
  if (topo) {
    var marca = function () { topo.classList.toggle('rolou', window.scrollY > 8); };
    marca(); window.addEventListener('scroll', marca, { passive: true });
  }

  /* Fecha o menu mobile ao clicar em um link */
  if (nav) {
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && nav.classList.contains('aberto')) {
        nav.classList.remove('aberto');
        if (btn) { btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-label', 'Abrir menu'); }
      }
    });
  }

  /* Animação de entrada suave */
  var alvos = document.querySelectorAll('.secao .cartao, .secao .duas-col > div, .secao h2, .faixa .container > div, .canal');
  if ('IntersectionObserver' in window && alvos.length) {
    var io = new IntersectionObserver(function (itens) {
      itens.forEach(function (it) { if (it.isIntersecting) { it.target.classList.add('ver'); io.unobserve(it.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    alvos.forEach(function (el, i) {
      el.classList.add('rev');
      el.style.transitionDelay = ((i % 3) * 70) + 'ms';
      io.observe(el);
    });
  } else {
    document.documentElement.classList.remove('js');
  }

  var ano = document.querySelector('[data-ano]');
  if (ano) ano.textContent = new Date().getFullYear();

  var form = document.getElementById('form-contato');
  if (form) {
    var via = 'whatsapp';
    form.querySelectorAll('button[type="submit"]').forEach(function (b) {
      b.addEventListener('click', function () { via = b.getAttribute('data-via'); });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = function (id) { return (document.getElementById(id).value || '').trim(); };
      var erro = document.getElementById('form-erro');
      if (!v('nome')) { erro.hidden = false; document.getElementById('nome').focus(); return; }
      erro.hidden = true;
      var linhas = [
        'Olá, Radices! Vim pelo site.',
        'Nome: ' + v('nome'),
        v('empresa') ? 'Empresa: ' + v('empresa') : '',
        v('telefone') ? 'Telefone: ' + v('telefone') : '',
        v('email') ? 'E-mail: ' + v('email') : '',
        'Assunto: ' + v('servico'),
        v('mensagem') ? '\n' + v('mensagem') : ''
      ].filter(Boolean).join('\n');
      if (via === 'email') {
        window.location.href = 'mailto:robsoncarvalho@radicesrh.com?subject=' +
          encodeURIComponent('Contato pelo site: ' + v('servico')) + '&body=' + encodeURIComponent(linhas);
      } else {
        window.open('https://wa.me/5514998330022?text=' + encodeURIComponent(linhas), '_blank', 'noopener');
      }
    });
  }
})();
