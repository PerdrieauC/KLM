export abstract class Regles {
    public parametres: { [key: string]: any };

    constructor(parametres: { [key: string]: any }) {
        this.parametres = parametres;
    }
}
