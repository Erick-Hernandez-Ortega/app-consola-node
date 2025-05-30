import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar',
    })
    .options('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Es el limite de multiplicar',
    })
    .options('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Mostrara la tabla',
    })
    .options('n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication table',
        describe: 'File name',
    })
    .options('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination',
    })
    .check((args, options): boolean => {
        if (args.b < 1) throw new Error('Error debe ser numero positivo');

        return true;
    })
    .parseSync();
