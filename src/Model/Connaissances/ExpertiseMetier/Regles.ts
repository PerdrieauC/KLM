export abstract class Regles {
    public expression: string;
    public parametres: { [key: string]: any };

    constructor(expression: string, parametres: { [key: string]: any }) {
        this.expression = expression;
        this.parametres = parametres;
    }
}
