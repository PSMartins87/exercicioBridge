import IConsoles from "../Consoles/IConsoles";
import IPlay from "./IPlay";
import Play from "./Play";

export default class AdvancedPlays extends Play {
    constructor(play: IConsoles) {
        super(play);
    }

    challenge() {
        console.log("modo desafio selecionado");
    }
}
