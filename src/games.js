import Firebase from 'github:firebase/firebase-bower@2.3.1';
import _ from 'lodash';

export class Games {
  heading = 'Wedstrijden';

  oefenwedstrijdRef = new Firebase('https://oefenwedstrijd.firebaseio.com/');

  games = new Map();

  saveGame(id, game) {
    let currentGameRef = this.oefenwedstrijdRef.child('games').child(id);
    currentGameRef.update(game);
  }
  activate() {
    var self = this;
    return this.oefenwedstrijdRef.child('games').on("value", function(snapshot) {
      _.each(snapshot.val(), (v,k) => {
        self.games.set(k,v);
      });
    });
  }
}
