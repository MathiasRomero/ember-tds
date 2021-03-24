import Model, { attr, hasMany } from '@ember-data/model';

export default class OrderModel extends Model {

  @attr('date')DateCreation;
  @hasMany('orderdetail') orderdetails;

  get count(){
    return this.orderdetails.length;
  }

}
