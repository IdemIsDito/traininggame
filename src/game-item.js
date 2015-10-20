import {bindable} from 'aurelia-framework';
import moment from 'moment';
import Firebase from 'github:firebase/firebase-bower@2.3.1';

export class GameItemCustomElement {
  constructor() {
    this.ref = new Firebase('https://oefenwedstrijd.firebaseio.com/');
  }

  @bindable game;

  get gameDate(){
    return moment(`${this.game.date}`).format("MMM Do YY");
  }

  deleteGame(){
    this.ref.child('games').child(`${this.game.id}`).remove();
  }
}
