import Route from '@ember/routing/route';
import { datas } from 'tds/data/datas';
import Produit from '../classes/Produit';

export default class Step1Route extends Route {
  model() {
    return new Produit(datas);
  }
}
