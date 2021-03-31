import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import abstractRoute from '../routes/abstractroute';

export default class SectionRoute extends Route {

  @service userAuth;

  model() {

    return this.store.query('section',{});

  }



  @action
  addSection(){
    this.transitionTo('section.add');
  }

  @action
  addProduit(){
    this.transitionTo('section.addProduct');
  }

  async deleteProducts(products) {
    while (products.firstObject) {
      let p = products.firstObject;
      await p.destroyRecord();
    }
  }
  @action DeleteSection(section) {
    this.deleteProducts(section.products).then(() => {
      section.destroyRecord();
    });
  }

  @action
  disconnect(){
    this.userAuth.logout();
    this.transitionTo('logout');
  }


}
