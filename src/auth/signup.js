import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';
@inject(AuthService)

export class Signup{
	constructor(auth){
		this.auth = auth;
    this.heading = 'Sign Up';
    this.email='';
  	this.password='';
  	this.displayName='';
	}

	signup(){
		return this.auth.signup(this.displayName, this.email, this.password)
		.then((response)=>{
			console.log("signed up");
		});

	}
}
