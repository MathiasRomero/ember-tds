import Route from '@ember/routing/route';
import { datas } from 'tds/data/data';
import services from 'tds/classes/services';


export default class Ex2Route extends Route {

model(){
  return new services(datas);
}

}
