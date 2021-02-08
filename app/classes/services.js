
export default class Services {
  services = [];
  promo = {
    B22: 0.05,
    AZ: 0.01,
    UBOAT: 0.02,
  };

  get promoValue() {

    let code = document.getElementById("promo").value;
    let check = document.getElementById('promoCheck');

    if (check.checked) {
      //document.getElementById('remise').style.display = 'block';
      //document.getElementById('total').visible;
      if (code == 'B22') {
        return this.sumActive * this.promo.B22;
      }
      if (code == 'AZ') {
        return this.sumActive * this.promo.AZ;
      }
      if (code == 'UBOAT') {
        return this.sumActive * this.promo.UBOAT;
      }
    } else {
      //document.getElementById('remise').style.display = 'none';
      //document.getElementById('total').style.display = 'none';
    }
    return 0;
  }

  get priceWithPromo() {
    return this.sumActive - this.promoValue;
  }

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
