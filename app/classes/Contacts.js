import Model from '@ember-data/model';

export default class Contacts{

  datas = [];
  contacts = [];
  deleteds = []
  deletedscount = 0;

 constructor(contacts) {
   this.datas = contacts;
 }

 get contact(){
   this.contacts = this.datas.filterBy('isDeleted',false);
   return this.contact;
 }

  get contact(){
    this.deleteds = this.datas.filterBy('isDeleted',true);
    return this.deleteds;
  }


}
