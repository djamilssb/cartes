import { Carte } from "./cartes";
import { valeur } from "./valeur";
import { couleur } from "./couleur";

export class Deck {
    cartes: Carte[];

    constructor() {
      this.cartes = [];
    }

    ajouter(cartes: Carte): void {
      this.cartes.push(cartes);
    }

    public getDisplay():string{
      let display : string = "";

    for(let i=0; i < this.cartes.length; i++ ){
      display += this.cartes[i].getDisplay()+'\n';
      }
    return display
  }
  
  public create_deck(): Carte[] {
    let value = [valeur.AS, valeur.DEUX, valeur.TROIS, valeur.QUATRES, valeur.CINQ, valeur.SIX, valeur.SEPT, valeur.HUIT, valeur.NEUF, valeur.DIX, valeur.ONZE, valeur.DOUZE, valeur.ROI];
    let color = [couleur.COEUR, couleur.PIC, couleur.TREFLE, couleur.CARREAUX];
    for (let i=0; i<13; i++) {
      for (let j=0; j<4; j++) {
        let carte = new Carte(value[i], color[j], `${valeur[value[i]]} de ${couleur[color[j]]}`);
        this.ajouter(carte);
      }
    }
    return this.cartes;
  }
};
let d_deck = new Deck();
d_deck.create_deck();
let display = d_deck.getDisplay();
console.log(display);