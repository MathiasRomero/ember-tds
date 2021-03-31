import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import abstractRoute from '../routes/abstractroute';

export default class BoardRoute extends abstractRoute {

  @service userAuth;

  model(){
    return {};
  }

  @action
  initialize(){
    let id = 1;

    this.store
      .query('order',{
      filter : {
        idemployee : id,
      },
    }).then((orders) => {
      let order = orders.firstObject;
      console.log(order);
    });
  }


  @action
  disconnect(){
    this.userAuth.logout();
    this.transitionTo('logout');
  }

  @action
  goToSection(){
    this.transitionTo('section');
  }

}
