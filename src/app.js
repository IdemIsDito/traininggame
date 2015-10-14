import 'bootstrap';
// import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router) {
    config.title = 'Oefenwedstrijdje';
    config.map([{
      route: ['', 'wedstrijden'],
      name: 'games',
      moduleId: 'games',
      nav: true,
      title: 'Wedstrijden'
    }, {
      route: 'user',
      name: 'user',
      moduleId: 'user',
      nav: true,
      title: 'Users'
    }]);

    this.router = router;
  }
}
