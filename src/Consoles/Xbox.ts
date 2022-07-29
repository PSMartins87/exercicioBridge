import IConsoles from "./IConsoles";

export default class Xbox implements IConsoles{
    constructor() {
        this.configureGame();
        console.log("xbox está pronto");
    }

    configureGame(): void {
        this.authToken();
        console.log("xbox sendo configurado");
    }
    authToken(): void {
        console.log("xbox autenticando token");
    }
}