import {inject} from 'aurelia-framework';
import {AuthContext} from '../auth/AuthContext';
import {appConfig} from '../app.config';
import Firebase from 'firebase';
import moment from 'moment';

@inject(AuthContext, appConfig)
export class NewGame {
  constructor(AuthContext, appConfig){
    this.authContext = AuthContext;
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
    let user = this.authContext.user();
    this.game.home[user.uid] = true;
  }
}
