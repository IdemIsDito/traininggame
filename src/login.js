import {inject} from 'aurelia-framework';
import {AuthContextJay} from 'AuthContext';

@inject(AuthContextJay)
export class Login{
	constructor(AuthContextJay) {
    this.authContext = AuthContextJay;
  }

	login() {
		this.authContext.login(this.email, this.password);
	}

	authenticate(name){
		alert('test');
	}
}
