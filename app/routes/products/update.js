import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';
import $ from "jquery";


export default class ProductsUpdateRoute extends Route {

  model(product){
    return RSVP.hash({
      product: this.store.findRecord('product',product.id, {
        include: 'packs',
      }),
    sections: this.store.findAll('section'),
    products: this.store.findAll('product'),
    })
  }


  @action
  modif(product){
    product.save();
    this.transitionTo('products');

  }

  @action
  goBack(){
    this.transitionTo('products');
  }
}
