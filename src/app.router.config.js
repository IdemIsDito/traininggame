import {AuthorizeStep} from './AuthorizeStep';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
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
        moduleId: './pages/games',
        nav: true,
        title: 'Wedstrijden'
      }, {
        route: 'nieuwe-wedstrijd',
        name: 'new-game',
        moduleId: './pages/new-game',
        nav: true,
        title: 'Nieuw Wedstrijd',
        auth: true
      }, {
        route: 'signup',
        moduleId: './pages/signup',
        nav: false,
        title: 'Signup'
      }, {
        route: 'login',
        moduleId: './pages/login',
        nav: false,
        title: 'Login'
      }, {
        route: 'logout',
        moduleId: './pages/logout',
        nav: true,
        title: 'Logout'
      }]);
    };
    this.router.configure(appRouterConfig);
  }
}
