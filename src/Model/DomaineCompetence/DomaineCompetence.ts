import {Connaissance} from "../Connaissances/Connaissance";

export class DomaineCompetence {
    public nom: string;
    public connaissances: Connaissance[];

    constructor(nom: string, connaissances: Connaissance[]) {
        this.nom = nom;
        this.connaissances = connaissances;
    }
}
