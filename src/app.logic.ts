import fs from "fs";
import { yarg } from "./config/plugis/yargs.plugins";

console.log(yarg)

const { b:base, l:limit, s:showTable } = yarg

let outMessage: string = "";

// const base: number = 5;
const headerMessage: string = `
=================================
Multiplication Table de ${base}
=================================
`;
const outPoutPath: string = `./outpouts/`;

for (let i: number = 1; i <= limit; i++) {
    outMessage += `${base} x ${i} = ${base * i}\n`;
}

outMessage = headerMessage + outMessage;

if (showTable) console.log(outMessage);

fs.mkdirSync(outPoutPath, { recursive: true });

fs.writeFileSync(`./outpouts/tabla-de-${base}.txt`, outMessage);