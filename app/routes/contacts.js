import Route from '@ember/routing/route';
import { action } from '@ember/object';
import Contacts from 'tds/classes/Contacts';

export default class ContactsRoute extends Route {

  model(){
    return new Contacts(this.store.findAll('contact'));

  }
  @action
  delete(contact){
    contact.deleteRecord();
  }

  @action
  cancelDeletion(deleteds){

  }

}
