import {inject} from 'aurelia-framework';
import {AuthService} from '../services/AuthService';
@inject(AuthService)

export class Signup{
	constructor(AuthService){
		this.authService = AuthService;
    this.heading = 'Sign Up';
    this.email='';
  	this.password='';
  	this.displayName='';
	}

	signup(){
		return this.authService.signup(this.displayName, this.email, this.password)
  		.then((response)=>{
  			console.log("signed up");
  		});
	}
}
