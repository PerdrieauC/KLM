import {Regles} from "./Regles";

export class NuagePoints extends Regles{
    public individus: {[key:string]: any}[];

    constructor(parametres: {[key:string]: any}, individu: {[key:string]: any}[]) {
        super(parametres)
        this.individus = individu;
    }

    public trouverVoisinLePlusProche(valeurRecherchee: {[key:string]: any}, listeValeurs: {[key:string]: any}[]): {[key:string]: any} | null {
        if (listeValeurs.length === 0) {
            return null;
        }

        let voisinLePlusProche = listeValeurs[0];
        let differenceMin = this.calculerDifference(valeurRecherchee, voisinLePlusProche);

        for (let i = 1; i < listeValeurs.length; i++) {
            const valeurCourante = listeValeurs[i];
            const differenceCourante = this.calculerDifference(valeurRecherchee, valeurCourante);

            if (differenceCourante < differenceMin) {
                differenceMin = differenceCourante;
                voisinLePlusProche = valeurCourante;
            }
        }

        return voisinLePlusProche;
    }

    private calculerDifference(valeur1: {[key:string]: any}, valeur2: {[key:string]: any}): number {
        let difference = 0;
        for (const key in valeur1) {
            if (valeur1.hasOwnProperty(key) && valeur2.hasOwnProperty(key) && typeof valeur1[key] === "number") {
                difference += Math.abs(valeur1[key] - valeur2[key]);
            }
        }
        return difference;
    }

}
