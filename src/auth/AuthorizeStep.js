import {Redirect} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {AuthContext} from './AuthContext';

@inject(AuthContext)
export class AuthorizeStep {
  constructor(AuthContext) {
    this.authContext = AuthContext;
  }
  run(routingContext, next) {
      if (routingContext.nextInstructions.some(i => i.config.auth)) {
        if (!this.authContext.user()) {
          return next.cancel(new Redirect('login'));
        }
      }
      return next();
    }
}
