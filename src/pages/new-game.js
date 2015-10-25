import {inject} from 'aurelia-framework';
import {AuthService} from '../services/AuthService';
import {appConfig} from '../app.config';
import Firebase from 'firebase';
import moment from 'moment';

@inject(AuthService, appConfig)
export class NewGame {
  constructor(AuthService, appConfig){
    this.authService = AuthService;
    this.heading = 'Nieuwe Wedstrijd';
    this.ref = new Firebase(appConfig.fireUrl);
    this.game = {
      location: '',
      time: '',
      date: '',
      club: '',
      home: {},
      away: {}
    };
  }

  saveGame() {
    let gamesRef = this.ref.child('games');
    gamesRef.push().set(this.game, (error) => {
      if (error) {

      } else {

      }
    });
  }
  activate() {
    let user = this.authService.user();
    this.game.home[user.uid] = true;
  }
}
