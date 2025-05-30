import { yarg } from "./config/plugis/yargs.plugins";
import {ServerApp} from "./presentation/server-app";

// Funcion anonima autoinvocada
(async (): Promise<void> => {
    await main();
})();

async function main(): Promise<void> {
    const { b:base, l:limit, s:showTable, n:fileName, d:fileDestination } = yarg;

    await ServerApp.run({base, limit, showTable, fileName, fileDestination });
}