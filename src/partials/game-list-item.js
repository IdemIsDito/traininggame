import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {appConfig} from '../app.config';
import Firebase from 'firebase';
import moment from 'moment';

@inject(appConfig)
export class GameListItemCustomElement {
  constructor(appConfig) {
    this.ref = new Firebase(appConfig.fireUrl);
  }

  @bindable game;

  get gameDate(){
    return moment(`${this.game.date}`).format("MMM Do YY");
  }

  deleteGame(){
    this.ref.child('games').child(`${this.game.id}`).remove();
  }
}
