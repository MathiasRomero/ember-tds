import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import abstractRoute from '../../routes/abstractroute';

export default class ProductsAddRoute extends Route {


  @action
  addSection(produit){

    let pro = this.store.createRecord('product',produit);
    pro.save();
    this.transitionTo('produit');
  }

}
