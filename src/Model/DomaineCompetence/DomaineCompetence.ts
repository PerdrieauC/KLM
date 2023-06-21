import {Connaissance} from "../Connaissances/Connaissance";
import {VocabulaireMetier} from "../Connaissances/VocabulaireMetier/VocabulaireMetier";
import {Procedural} from "../Connaissances/Procedural/Procedural";
import {Experimental} from "../Connaissances/Experimental/Experimental";
import {ExpertiseMetier} from "../Connaissances/ExpertiseMetier/ExpertiseMetier";

export class DomaineCompetence {
    public nom: string;
    public vocabulaire: VocabulaireMetier;
    public procedures: Procedural[];
    public experiences: Experimental[];
    public expertises: ExpertiseMetier[];
    //public connaissances: Connaissance[];

    constructor(nom: string, voca: VocabulaireMetier, proc: Procedural[], experiences: Experimental[], expertises: ExpertiseMetier[]) {
        this.nom = nom;
        this.vocabulaire = voca;
        this.procedures = proc;
        this.experiences = experiences;
        this.expertises = expertises;
    }
}
