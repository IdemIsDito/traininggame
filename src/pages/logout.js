import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {AuthService} from '../services/authService';

@inject(AuthService, Router)
export class Logout{
	constructor(AuthService, Router){
		this.AuthService = AuthService;
    this.router = Router;
	}

	 activate(){
    return this.AuthService.logout();
      //.then(router.navigateToRoute('games'));
	}
}
