import Firebase from 'github:firebase/firebase-bower@2.3.1';
import _ from 'lodash';
import moment from 'moment';

export class Games {
  constructor(){
    this.heading = 'Wedstrijden';
    this.ref = new Firebase('https://oefenwedstrijd.firebaseio.com/');
  }

  saveGame(id, game) {
    let currentGameRef = this.ref.child('games').child(id);
    currentGameRef.update(game);
  }

  activate() {
    var self = this;
    return this.ref.child('games').on("value", (snapshot) => {
      self.games = [];
      _.each(snapshot.val(), (v,k) => {
        v.id = k;
        self.games.push(v);
      });
    });
  }
}
