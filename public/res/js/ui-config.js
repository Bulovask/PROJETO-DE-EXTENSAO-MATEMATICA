(() => {

  // Alternar exibição do menu de navegação lateral
  const toggleMenuBtn = document.getElementById('toggle-menu-btn');
  const sideMenu = document.getElementById('side-menu');
  toggleMenuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('show');
  });

  const appsSection = Array.from(document.getElementsByClassName('app-section'));
  function updatePageContent(pathname) {
    appsSection.forEach(section => {
      if(section.dataset.pathname == pathname) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    });
    console.log(pathname);
  }

  // Desabilitar comportamento padrão do navegador para os links internos
  document.addEventListener('click', e => {
    const anchor = e.target.closest('a');

    if (anchor && anchor.hostname === window.location.hostname) {
      e.preventDefault(); // Evita o comportamento padrão de recarregar a página

      const url = new URL(anchor.href);
      history.pushState(null, '', url.pathname);
      updatePageContent(url.pathname); // Atualiza o conteúdo da página com base na nova URL
    }
  }, false);


})();
