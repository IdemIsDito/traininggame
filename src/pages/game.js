import {inject} from 'aurelia-framework';
import {GameService} from '../services/gameService';
import _ from 'lodash';

@inject(GameService)
export class Games {
  constructor(gameService){
    this.gameService = gameService;
    this.game = {};
  }
  activate(options) {
    var self = this;
    return this.gameService.getGame(options.gameId)
      .then((game) => {
        self.game = game;
      });
      //TODO handle failures!
  }
}
