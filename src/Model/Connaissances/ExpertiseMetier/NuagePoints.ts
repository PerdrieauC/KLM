import {Regles} from "./Regles";

export class NuagePoints extends Regles{
    public individus: any[];

    constructor(parametres: {[key:string]: any}, individu: any[]) {
        super(parametres)
        this.individus = individu;
    }

}
