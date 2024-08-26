import { valeur } from "./valeur";
import { couleur } from "./couleur";

export class Carte {
    protected valeur: valeur;
    protected couleur: couleur;
    protected nom : string
  
    constructor(valeur: valeur, couleur: couleur, nom : string) {
      this.valeur = valeur;
      this.couleur = couleur;
      this.nom = nom;
    }
  
    public getDisplay():string{
      return `${this.nom}`;
    }
  };