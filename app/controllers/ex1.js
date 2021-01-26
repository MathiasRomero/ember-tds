import Controller from '@ember/controller';
import {action} from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class Ex1Controller extends Controller {
  @tracked content = '';
  @tracked info ='';

  MAX=100;

  get style(){
    if(this.size > 50){
      return 'info';
    }
    if(this.size > 20){
      return 'warning';
    }
    return 'danger';

  }


  get size(){
    return this.MAX - this.content.length;
  }

  @action save(){
    console.log('Test save '+this.content);
    if(this.info !=''){
      this.info = "Note enregistrée";
    }

  }

  @action supprimer(){
    this.content = '';
  }

  @action update(){
    if(this.content !=''){
      this.info = "Note modifiée";
    }
  }

  @action clear(){
    this.info ='';
  }
}
