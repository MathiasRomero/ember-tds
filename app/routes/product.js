import Route from '@ember/routing/route';

export default class ProductRoute extends Route {

  model(){
    return this.store.findAll('order', { include : 'packs'});
  }
}
