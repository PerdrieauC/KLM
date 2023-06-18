import { Connaissance } from "../Connaissance";
import { Regles } from "./Regles";

export class ExpertiseMetier extends Connaissance {
    public regles: { [key: string]: Regles };

    constructor(nom: string, description: string) {
        super(nom, description);
        this.regles = {};
    }
}
