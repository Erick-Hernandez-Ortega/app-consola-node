import { CreateTable } from "../domain/use-cases/create-table.use-case";
import {SaveFile} from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    fileDestination: string;
}

export class ServerApp {
    static async run ({base, limit, showTable, fileName, fileDestination}: RunOptions): Promise<void> {
        console.log("Server running");

        const table: string = new CreateTable().execute({base, limit});
        const wasCreated: boolean = new SaveFile().execute({fileContent: table, fileName, destination: fileDestination});

        if (showTable) console.log(table);
        (wasCreated) ? console.log("Created new table") : console.log("Not created");
    }
}