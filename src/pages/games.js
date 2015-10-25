import {inject} from 'aurelia-framework';
import {GameService} from '../services/gameService';
import _ from 'lodash';

@inject(GameService)
export class Games {
  constructor(gameService){
    this.heading = 'Wedstrijden';
    this.gameService = gameService;
    this.games = [];
  }
  activate() {
    var self = this;
    return this.gameService.getGames()
      .then((games) => {
        _.each(games, (v,k) => {
          v.id = k;
          self.games.push(v);
        });
      });
      //TODO handle failures!
  }
}
