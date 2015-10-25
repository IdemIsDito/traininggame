import {inject} from 'aurelia-framework';
import {AuthContext} from './AuthContext';

@inject(AuthContext)
export class Login{
	constructor(AuthContext) {
    this.authContext = AuthContext;
  }

	login() {
		this.authContext.login(this.email, this.password);
	}

	authenticate(name){
		alert('test');
	}
}
