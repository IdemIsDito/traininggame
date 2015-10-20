import Firebase from 'github:firebase/firebase-bower@2.3.1';
import _ from 'lodash';
import moment from 'moment';

export class NewGame {
  constructor(){
    this.heading = 'Nieuwe Wedstrijd';
    this.ref = new Firebase('https://oefenwedstrijd.firebaseio.com/');
    this.game = {
      location: '',
      time: '',
      date: '',
      club: ''
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
}
