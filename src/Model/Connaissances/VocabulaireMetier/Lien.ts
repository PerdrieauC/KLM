import { TypeLien } from './TypeLien'

export class Lien {
    private idTerme: number;
    private type: TypeLien;

    constructor(id: number, lien: string) {
        this.idTerme = id;
        this.type = TypeLien[lien as keyof typeof TypeLien];
    }

    public getIdTerme(): number {
        return this.idTerme;
    }

    public getType(): TypeLien {
        return this.type;
    }
}
