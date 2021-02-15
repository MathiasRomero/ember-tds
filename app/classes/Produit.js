import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Produit {
  @tracked produitDispo = [];
  @tracked produitInclure = [];

  constructor(prod) {
    this.produitDispo = prod;
    this.produitInclure = [];

    console.log("Constructeur : Produit dispo -> " + this.produitDispo)
    console.log("Constructeur : Produit inclure -> " + this.produitInclure)
  }

  @action
  switchAll(){
    this.produitInclure = this.produitDispo;
    this.produitDispo = [];
    console.log("Switch");
    console.log(this.produitInclure);
  }

}
