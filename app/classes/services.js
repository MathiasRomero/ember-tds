import { tracked } from '@glimmer/tracking';

export default class Services {
  services = [];
  promo = [];
  @tracked code = '';

  get promoValue() {
    let check = document.getElementById('promoCheck');
    let remise = document.getElementById('remise');

    if (check.checked) {
      console.log('code promo : ' + this.code);
      remise.innerHTML = 'Code promo non valide';
      if (this.code in this.promo) {
        remise.innerHTML =
          'Remise : ' + this.promo[this.code] * this.sumActive + ' $';
        return this.promo[this.code] * this.sumActive;
      }
    }
    return 0;
  }

  get priceWithPromo() {
    return this.sumActive - this.promoValue;
  }

  constructor(serv, promo) {
    this.services = serv;
    this.promo = promo;
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
