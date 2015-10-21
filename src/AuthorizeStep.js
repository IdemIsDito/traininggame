import {Redirect} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {AuthContextJay} from 'AuthContext';

@inject(AuthContextJay)
export class AuthorizeStepJay {
  constructor(AuthContextJay) {
    this.authContext = AuthContextJay;
  }
  run(routingContext, next) {
      if (routingContext.nextInstructions.some(i => i.config.auth)) {
        if (!this.authContext.isLoggedIn()) {
          return next.cancel(new Redirect('login'));
        }
      }
      return next();
    }
}
