const menu = (function() {
  const app = {};

  app.navToggle = function() {
    document.getElementById('menu').classList.toggle('layout__menu_show');
    document
      .getElementById('menu-override')
      .classList.toggle('layout__override_show');
  };

  app.menuUserToggle = function() {
    document
      .getElementById('menu-user-list')
      .classList.toggle('layout__menu-user-list_show');
    document
      .getElementById('menu-user-override')
      .classList.toggle('layout__menu-user-override_show');
  };

  app.submenuToggle = function(id) {
    const item = document.getElementById(id);
    const arrow = item.getElementsByClassName(
      'layout__menu-list-options-arrow',
    );
    if (arrow && arrow[0]) {
      arrow[0].classList.toggle('fa-angle-down');
      arrow[0].classList.toggle('fa-angle-up');
    }
    const menu = item.getElementsByClassName('layout__menu-list-sub');
    if (menu && menu[0]) {
      menu[0].classList.toggle('layout__menu-list-sub_show');
    }
  };
  return app;
})();
