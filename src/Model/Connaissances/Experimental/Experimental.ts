import { Connaissance } from "../Connaissance";

export enum TypeExperience {
    CE = "Cas d'école",
    BM = "Bétise métier"
}

export class Experimental extends Connaissance {
    public type: TypeExperience;

    constructor(nom: string, description: string, type: string) {
        super(nom, description);
        this.type = TypeExperience[type as keyof typeof TypeExperience];
    }
}
