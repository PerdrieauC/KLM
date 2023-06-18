import {Regles} from "./Regles";
import {evaluate} from "mathjs";

export class ExpressionLogique extends Regles{

    constructor(expression: string, parametre: {[key:string]: any}) {
        super(expression, parametre);
    }

    public evaluateExpression() {
        return evaluate(this.expression, this.parametres);
    }
}
