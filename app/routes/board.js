import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BoardRoute extends Route {

  @service userAuth;

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

}
