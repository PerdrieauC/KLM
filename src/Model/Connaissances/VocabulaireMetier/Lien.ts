import { Terme } from './Terme';
import { TypeLien } from './TypeLien'

class Lien {
    private premierTerme: Terme;
    private secondTerme: Terme;
    private type: TypeLien;

    constructor(t1: Terme, t2: Terme, lien: string) {
        this.premierTerme = t1;
        this.secondTerme = t2;
        this.type = TypeLien[lien as keyof typeof TypeLien];
    }
}
