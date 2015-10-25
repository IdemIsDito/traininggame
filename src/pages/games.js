import {inject} from 'aurelia-framework';
import {appConfig} from '../app.config';
import Firebase from 'firebase';
import moment from 'moment';
import _ from 'lodash';

@inject(appConfig)
export class Games {
  constructor(appConfig){
    this.heading = 'Wedstrijden';
    this.ref = new Firebase(appConfig.fireUrl);
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
