import {inject} from  'aurelia-framework';
import {appConfig} from '../app.config';
import Firenext from 'firenext';

@inject(appConfig)
export class GameService {

  constructor(appConfig) {
    this.ref = new Firenext(appConfig.fireUrl);
  }
  getGame(gameId){
    return this.ref
      .child('games')
      .child(gameId)
      .exec()
      .then(function(snapshot) {
        return snapshot.val();
      });
  }
  getGames(){
    return this.ref
      .child('games')
      .exec()
      .then(function(snapshot) {
        return snapshot.val();
      });
  }
  deleteGame(game){
    return this.ref
      .child('games')
      .child(game.id)
      .remove();
  }
}
