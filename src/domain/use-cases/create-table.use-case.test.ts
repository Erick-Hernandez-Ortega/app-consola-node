import { CreateTable } from "./create-table.use-case";

describe("createTable", (): void => {
    test('Should create a table with default values', (): void => {
        const createTable: CreateTable = new CreateTable();
        const table: string = createTable.execute({base: 2});
        const rows: number = table.split("\n").length;

        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain("2 x 1 = 2");
        expect(table).toContain("2 x 10 = 20");
        expect(rows).toBe(10);
    });

    test('Should create a table with custom values', (): void => {
        const createTable: CreateTable = new CreateTable();

        const options = {
            base: 3,
            limit: 20,
        }

        const table: string = createTable.execute(options);
        const rows: number = table.split("\n").length;

        expect(table).toContain("3 x 1 = 3");
        expect(table).toContain("3 x 10 = 30");
        expect(table).toContain("3 x 20 = 60");
        expect(rows).toBe(options.limit);
    })
});