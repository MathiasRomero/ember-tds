import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ContactsUpdateRoute extends Route {

  model(){

  }

  @action
  update(contact){

  }

  renderTemplate(controller, model) {
    this.render('contacts.add');
  }
}
