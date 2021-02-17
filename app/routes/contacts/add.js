import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ContactsAddRoute extends Route {

  model(){
    return this.store.createRecord('contact', {
      nom: 'Smith',
    });
  }

  @action
  add(contact){
    contact.save();
  }

}
