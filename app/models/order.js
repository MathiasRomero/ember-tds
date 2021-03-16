import Model, { attr } from '@ember-data/model';

export default class OrderModel extends Model {

  @attr('') dateCreation;
  @attr('') status;
  @attr('number') amount;
  @attr('number') toPay;
  @attr('number') itemsNumber;
  @attr('number') missingNumber;
  @attr('number') employee;
  @attr('number') timeslot;
  @attr('number') user;

}
