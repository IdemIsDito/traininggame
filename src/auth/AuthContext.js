import {inject} from 'aurelia-framework';
import {appConfig} from '../app.config';
import Firebase from 'firebase';

@inject(appConfig)
export class AuthContext {

  constructor(appConfig){
    this.ref = new Firebase(appConfig.fireUrl);
  }

  user() {
    return this.ref.getAuth();
  }

  login(email, pass) {
    var self = this;

    this.ref.authWithPassword({
      email    : email,
      password : pass
    }, (error, authData) => {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        self.user = authData;
      }
    });
  }

  logout (){
    this.ref.unauth();
  }
}
