const modal = (function() {
  const app = {};

  app.init = function() {
    console.log('Aplicação iniciada');
  };

  app.toggle = function(modal) {
    document.getElementById(modal).classList.toggle('modal__show');
  };

  return app;
})();

window.onload = modal.init;
