export class Etape {
    public description: string;

    constructor(description: string) {
        this.description = description;
    }

    public toString(): string {
        return this.description;
    }
}
