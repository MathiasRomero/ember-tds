import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class TestNewRoute extends Route {

  model() {
    return this.store.createRecord('contact', {
      nom: 'Smith',
    });
  }

    @action save(contact){
      contact.save().then(()=>{
        this.transitionTo('testList')});
    }


}
