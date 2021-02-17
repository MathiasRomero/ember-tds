import Route from '@ember/routing/route';
import { action } from '@ember/object'

export default class ContactsRoute extends Route {

  model(){
    return this.get('store').findAll('contact');

  }

  @action
  delete(contact){

  }

  @action
  cancelDeletion(deleteds){

  }

}
