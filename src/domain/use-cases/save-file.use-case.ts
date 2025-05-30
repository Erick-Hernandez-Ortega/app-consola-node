import fs from "fs";

export interface SaveFileUseCase {
    execute(options: SaveFileOptions): boolean;
}

export interface SaveFileOptions {
    fileContent: string; 
    destination?: string;
    fileName?: string;
}


export class SaveFile implements SaveFileUseCase {

    constructor(
        // Storage repository - DI
    ) {
    }

    execute({fileContent, fileName = 'table', destination = `./outpouts/`}: SaveFileOptions): boolean {
        try {
            fs.mkdirSync(destination, { recursive: true });

            fs.writeFileSync(`./${destination}/${fileName}.txt`, fileContent);

            console.log(`Saved file: ${fileName}`);
            return true;
        } catch (error: any) {
            console.error(error);
            return false;
        }
    }
}