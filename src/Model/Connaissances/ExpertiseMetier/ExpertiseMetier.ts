import { Connaissance } from "../Connaissance";
import { Regle } from "./Regle";

export class ExpertiseMetier extends Connaissance {
    public regles: Regle[];

    constructor(nom: string, description: string, rules: Regle[]) {
        super(nom, description);
        this.regles = rules;
    }
}
