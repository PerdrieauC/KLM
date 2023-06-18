import { Connaissance } from "../Connaissance";
import { Terme } from "./Terme";

export class VocabulaireMetier extends Connaissance {
    private termes: { [key: string]: Terme };

    constructor(nom: string, description: string, termes: Terme[]) {
        super(nom, description);
        this.termes = {};
        for (const terme of termes) {
            this.termes[terme.getNom()] = terme;
        }
    }

    public getTerme(key: string): Terme {
        return this.termes[key];
    }

    public toString(): string {
        return this.nom + " : " + this.description;
    }
}
