import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ContactsAddRoute extends Route {

  model(){

  }

  @action
  add(contact){
    contact.save();
  }

}
