import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import abstractRoute from '../../routes/abstractroute';

export default class SectionAddRoute extends Route {

  @action
  goBack(){
    this.transitionTo('section');
  }

  @action
  addSection(name, description){

    console.log(name);
    console.log(description);

    let section = new section;

    section.setName(name);
    section.setDescription(description);

    this.store.put(section);

}

}
