import IConsoles from "../Consoles/IConsoles";
import IPlay from "./IPlay";

export default class Play implements IPlay{
    constructor(private _plataform: IConsoles) {}
    playing(): void {
        console.log("O jogo está sendo jogado");
    }
    
    result(): void {
        console.log("jogo finalizado");
    }

   
}