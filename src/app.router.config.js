import {
  AuthorizeStep
}
from 'aurelia-auth';
import {
  inject
}
from 'aurelia-framework';
import {
  Router
}
from 'aurelia-router';

@
inject(Router)
export default class {

  constructor(router) {
    this.router = router;
  }
  configure() {
    var appRouterConfig = function(config) {
      config.title = 'Oefenwedstrijdje';

      config.addPipelineStep('authorize', AuthorizeStep); // Add a route filter to the authorize extensibility point.

      config.map([{
        route: ['', 'wedstrijden'],
        name: 'games',
        moduleId: 'games',
        nav: true,
        title: 'Wedstrijden'
      }, {
        route: 'nieuwe-wedstrijd',
        name: 'new-game',
        moduleId: 'new-game',
        nav: true,
        title: 'Nieuw Wedstrijd'
      }, {
        route: 'user',
        name: 'user',
        moduleId: 'user',
        nav: true,
        title: 'Users',
        auth: true
      }, {
        route: 'signup',
        moduleId: './signup',
        nav: false,
        title: 'Signup'
      }, {
        route: 'login',
        moduleId: './login',
        nav: false,
        title: 'Login'
      }, {
        route: 'logout',
        moduleId: './logout',
        nav: false,
        title: 'Logout'
      }, {
        route: 'profile',
        moduleId: './profile',
        nav: false,
        title: 'Profile'
      }]);
    };
    this.router.configure(appRouterConfig);
  }
}
