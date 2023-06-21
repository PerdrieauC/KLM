import { Connaissance } from "../Connaissance";
import { Terme } from "./Terme";

export class VocabulaireMetier extends Connaissance {
    public termes: { [key: string]: Terme };

    constructor(termes: Terme[]) {
        super("Vocabulaire", "Ces connaissances regroupes les termes du domaine et leurs liens");
        this.termes = {};
        for (const terme of termes) {
            this.termes[terme.getId()] = terme;
        }
    }

    public getTerme(key: number): Terme {
        return this.termes[key];
    }

    public toString(): string {
        return this.nom + " : " + this.description;
    }

    public nb_termes(): number {
        return Object.keys(this.termes).length;
    }

}
