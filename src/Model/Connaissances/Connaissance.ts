export class Connaissance {
    public nom: string;
    public description: string;
    public parametres: { [key: string]: any };

    constructor(nom: string, description: string) {
        this.nom = nom;
        this.description = description;
        this.parametres = {};
    }

    public addParametre(key: string, value: any): void {
        this.parametres[key] = value;
    }

    public getParametre(key: string): any {
        return this.parametres[key];
    }
}
