import {inject} from 'aurelia-framework';
import {appConfig} from '../app.config';
import Firenext from 'firenext';

@inject(appConfig)
export class AuthService {

  constructor(appConfig){
    this.ref = new Firenext(appConfig.fireUrl);
  }

  user() {
    return this.ref.getAuth();
  }

  login(email, pass) {
    return this.ref.authWithPassword({
      email    : email,
      password : pass
    });
  }

  logout (){
    return this.ref.unauth();
  }
}
