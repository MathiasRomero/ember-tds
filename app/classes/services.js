import { tracked } from "@glimmer/tracking";

export default class Services {
  services = [];
  promo = [];
  @tracked code = '';

  get promoValue() {
    let check = document.getElementById("promoCheck");

    if (check.checked) {
      console.log('code promo : ' + this.code);
      if (this.code in this.promo) {
        return this.promo[this.code] * this.sumActive;
      }
    }
    return 0;
  }

  get priceWithPromo() {
    return this.sumActive - this.promoValue;
  }

  constructor(serv,promo) {
    this.services = serv;
    this.promo = promo
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
