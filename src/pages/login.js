import {inject} from 'aurelia-framework';
import {AuthService} from '../services/AuthService';
import {Router} from 'aurelia-router';

@inject(AuthService, Router)
export class Login {
  constructor(AuthService, Router) {
    this.router = Router;
    this.AuthService = AuthService;
  }

  login() {
    var self = this;
    this.AuthService.login(this.email, this.password)
      .then((authData) => {
        self.router.navigateToRoute('games');
      }).catch((error) => {
        console.log("Login Failed!", error);
      });
  }
}
