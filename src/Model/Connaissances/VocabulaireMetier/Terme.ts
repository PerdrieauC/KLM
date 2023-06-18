export class Terme {
    private id: number;
    private nom: string;
    private description: string;

    constructor(id: number, nom: string, description: string) {
        this.id = id;
        this.nom = nom;
        this.description = description;
    }

    public getNom(): string {
        return this.nom;
    }

    public toString(): string {
        return this.nom + " : " + this.description;
    }
}
