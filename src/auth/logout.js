import {inject} from 'aurelia-framework';
import {AuthContext} from './AuthContext';

@inject(AuthContext)
export class Logout{
	constructor(AuthContext){
		this.authContext = AuthContext;
	}

	 activate(){
    return this.authContext.logout();
	}
}
