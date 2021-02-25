import Model, { attr } from '@ember-data/model';

export default class Category extends Model {

  @attr('string') nom;
  @hasMany('contact') contacts;

}
