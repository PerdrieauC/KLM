import { Lien } from "./Lien";
export class Terme {
    private id: number;
    private nom: string;
    private description: string;
    private liens: Lien[];

    constructor(id: number, nom: string, description: string, liens: Lien[]) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.liens = liens;
    }

    public getId(): number {
        return this.id;
    }

    public getNom(): string {
        return this.nom;
    }

    public getDesc(): string {
        return this.description;
    }

    public getLiens(): Lien[] {
        return this.liens;
    }

    public toString(): string {
        return this.nom + " : " + this.description;
    }
}
