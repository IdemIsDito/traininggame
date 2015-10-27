import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import moment from 'moment';
import {GameService} from '../services/gameService';
@inject(GameService)
export class GameListItemCustomElement {
  constructor(GameService){
    this.gameService = GameService;
  }
  @bindable game;
  get gameDate(){
    //TODO Localization
    return moment(`${this.game.date}`).format("MMM Do YY");
  }
}
