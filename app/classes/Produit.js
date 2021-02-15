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
  inclusAll() {
    this.produitInclure = this.produitInclure.concat(this.produitDispo);
    this.produitDispo = [0];


    if(this.produitInclure[0] == 0){ // Permet de supprimer la ligne vide générer par la concatenation au début
      this.produitInclure.shift();
    }
    if(this.produitInclure[this.produitInclure.length - 1] == 0){ // Permet de supprimer la ligne vide générer par la concatenation
      this.produitInclure.pop();
    }


  }


  @action
  dispoAll(){
    this.produitDispo = this.produitDispo.concat(this.produitInclure);
    this.produitInclure = [0];

    if(this.produitDispo[0] == 0){ // Permet de supprimer la ligne vide générer par la concatenation au début
      this.produitDispo.shift();
    }

    if(this.produitDispo[this.produitDispo.length - 1] == 0){ // Permet de supprimer la ligne vide générer par la concatenation
      this.produitDispo.pop();
    }
  }

}
