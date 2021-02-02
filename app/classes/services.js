export default class Services {
  services = [];

  constructor(serv) {
    this.services = serv;
  }

    get countActive(){
      this.services.filterBy('active',true).length;
  }

}
