import {Regles} from "./Regles";
import {evaluate} from "mathjs";

export class ExpressionLogique extends Regles{
    public expression: string;

    constructor(expression: string, parametre: {[key:string]: any}) {
        super(parametre);
        this.expression = expression;
    }

    public evaluateExpression() {
        return evaluate(this.expression, this.parametres);
    }
}
