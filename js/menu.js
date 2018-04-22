const menu = (function () {

    const app = {};

    app.navToggle = function () {
        document.getElementById('menu__nav').classList.toggle('menu__nav_show');
        document.getElementById('menu__opacity').classList.toggle('menu__opacity_show');
    }

    app.menuUserToggle = function () {
        console.log(document.getElementsByClassName('menu__user-options'));
    }

    app.submenuToggle = function(id){
        console.log(id);
        document.getElementById(id).classList.toggle('menu__nav-subitem_show');
    }
    return app;
})();