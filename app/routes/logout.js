import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';



export default class LogoutRoute extends Route {

  @action
  goToIndex(){
    this.transitionTo('index');
  }


}
