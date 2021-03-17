import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import abstractRoute from '../../routes/abstractroute';

export default class SectionAddProductRoute extends Route {

  @action
  goBack(){
    this.transitionTo('section');
  }


  @action
  add(nom,description,produit){



  }

}
