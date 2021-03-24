import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import abstractRoute from '../routes/abstractroute';

export default class SectionRoute extends Route {

  @service userAuth;

  model() {

    return this.store.query('section',{});

  }



  @action
  addSection(){
    this.transitionTo('section.add');
  }

  @action
  addProduit(){
    this.transitionTo('section.addProduct');
  }

  @action
  DeleteSection(section){

   // let sec = this.store.findRecord('section',section.id);
    section.deleteRecord();
    section.save();
  }

  @action
  disconnect(){
    this.userAuth.logout();
    this.transitionTo('logout');
  }


}
