export default class Services {
  services = [];
  total = 0;

  constructor(serv) {
    this.services = serv;
  }

  get countActive() {
    console.log(
      'Service actif : ' + this.services.filterBy('active', true).length
    );
    return this.services.filterBy('active', true).length;
  }

  get sumActive() {
    var resultat = 0;
    this.services.filterBy('active', true).forEach(function (service) {
      resultat += service.price;
    });
    return resultat;
  }
}
