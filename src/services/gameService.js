import {inject} from  'aurelia-framework';
import {appConfig} from '../app.config';
import Firenext from 'firenext';

@inject(appConfig)
export class GameService {

  constructor(appConfig) {
    this.ref = new Firenext(appConfig.fireUrl);
  }

  getGames(){
    return this.ref
      .child('games').exec()
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
