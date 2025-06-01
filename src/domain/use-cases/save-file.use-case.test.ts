import {SaveFile} from "./save-file.use-case";
import fs from "fs";

describe('SaveFileUseCase', (): void => {
    afterEach((): void => {
        fs.rmSync('outpouts', {recursive: true});
    });

    test('Should save file with default value', (): void => {
        const saveFile: SaveFile = new SaveFile();
        const options = {
            'fileContent': 'test'
        };
        const filePath: string = 'outpouts/table.txt'

        const result: boolean = saveFile.execute(options);
        const checkFile: boolean = fs.existsSync(filePath);
        const fileContest: string = fs.readFileSync(filePath, { encoding: 'utf8' });

        expect(result).toBe(true);
        expect(checkFile).toBe(true);
        expect(fileContest).toContain(options.fileContent);
    });


});