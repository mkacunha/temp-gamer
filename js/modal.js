var modal = (function () {

    var app = {};

    app.init = function () {
        console.log('Aplicação iniciada');
    }

    app.toggle = function () {
        document.getElementById('modal').classList.toggle('modal__show');
    }

    return app;
})();

window.onload = appGame.init;