import Firebase from 'firebase';
import _ from 'lodash';

export class AuthContextJay {

  constructor(){
    this.ref = new Firebase('https://oefenwedstrijd.firebaseio.com/');
    this.user = {};
  }

  isLoggedIn() {
    return !_.isUndefined(this.user.uid);
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
}
