import IConsoles from "./IConsoles";

export default class Playstation implements IConsoles {
    constructor() {
        this.configureGame();
        console.log("playstation está pronto");
    }

    configureGame(): void {
        this.authToken();
        console.log("playstation sendo configurado");
    }
    authToken(): void {
        console.log("playstation autenticando token");
    }
}
