import Model, { attr } from '@ember-data/model';

export default class EmployeeModel extends Model {

  @attr('String')name;
  @attr('String')password;
  @attr('String')email;


}
