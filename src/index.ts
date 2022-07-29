import IConsoles from "./Consoles/IConsoles";
import IConsole from "./Consoles/IConsoles";
import Playstation from "./Consoles/Playstation";
import Xbox from "./Consoles/Xbox";
import AdvancedPlays from "./Games/AdvancedPlay";
import Play from "./Games/Play";
function startGame(_console: IConsole) {
    console.log("Aguarde...");
    const game = new Play(_console);
    game.playing();
    game.result();
}

function startAdvancedGame(_plataform: IConsoles) {
    console.log("Aguarde...");
    const game = new AdvancedPlays(_plataform)
    game.playing();
    game.challenge();
    game.result();
}

startAdvancedGame(new Playstation);
console.log();
startAdvancedGame(new Xbox);
console.log();

