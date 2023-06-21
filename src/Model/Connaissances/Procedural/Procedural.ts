import { Connaissance } from "../Connaissance";
import { Etape } from "./Etape";

export class Procedural extends Connaissance {
    public Etapes: Etape[];

    constructor(nom: string, description: string, steps: Etape[]) {
        super(nom, description);
        this.Etapes = steps;
    }

}
