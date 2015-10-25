import {Redirect} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {AuthService} from './services/AuthService';

@inject(AuthService)
export class AuthorizeStep {
  constructor(AuthService) {
    this.authService = AuthService;
  }
  run(routingContext, next) {
      if (routingContext.nextInstructions.some(i => i.config.auth)) {
        if (!this.authService.user()) {
          return next.cancel(new Redirect('login'));
        }
      }
      return next();
    }
}
