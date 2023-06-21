export enum TypeRegle {
    MATH = "Equation mathématiques",
    LOGIQUE = "Logique des prédicats",
    NUAGE = "Nuage de points",
}

export class Regle {
    public nom: string;
    public expression: string;
    public type: TypeRegle;

    constructor(nom: string, expres: string, type: string) {
        this.nom = nom;
        this.expression = expres;
        this.type = TypeRegle[type as keyof typeof TypeRegle];
    }
}
