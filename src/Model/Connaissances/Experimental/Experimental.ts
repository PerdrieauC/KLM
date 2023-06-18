import { Connaissance } from "../Connaissance";

export enum TypeExperience {
    CE = "Cas d'école",
    BM = "Bétise métier"
}

export class ExperienceMetier extends Connaissance {
    public type: TypeExperience;

    constructor(nom: string, description: string, type: TypeExperience) {
        super(nom, description);
        this.type = type;
    }

    public toString(): string {
        return `ExperienceMetier{type=${this.type}, nom='${this.nom}', description='${this.description}'}`;
    }
}
