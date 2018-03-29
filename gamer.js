var appGame = (function () {

    var app = {};

    app.init = function () {
        console.log('Aplicação iniciada');
    }

    app.modalToggle = function () {
        document.getElementById('modal').classList.toggle('show-modal');
    }

    return app;
})();

window.onload = appGame.init;

