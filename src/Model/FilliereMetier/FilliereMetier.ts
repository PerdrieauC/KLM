import {DomaineCompetence} from "../DomaineCompetence/DomaineCompetence";

export class FilliereMetier {
    public nom:string;
    public domaine: DomaineCompetence[];

    constructor(nom:string, domaine:DomaineCompetence[]) {
        this.nom = nom;
        this.domaine = domaine;
    }
}
