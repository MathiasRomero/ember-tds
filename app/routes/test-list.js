import Route from '@ember/routing/route';

export default class TestListRoute extends Route {

  model(){
    return this.get('store').findAll('contact');
  }

}
