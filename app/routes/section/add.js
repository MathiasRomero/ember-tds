import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import abstractRoute from '../../routes/abstractroute';

export default class SectionAddRoute extends Route {


  model() {
    return {};
  }

  @action
  goBack(){
    this.transitionTo('section');
  }

  @action
  addSection(section){

    console.log(section.name);
    console.log(section.description);

    let sec = this.store.createRecord('section',section);
    sec.save();
    this.transitionTo('section');
}



}
