export interface CreateTableUseCase {
    execute({base, limit}: CreateTableOptions): string
}

interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {
    constructor(
        // DI - Dependency Injection       
    ) {}

    execute({base, limit = 10}: CreateTableOptions): string {
        let outMessage: string = "";

        for (let i: number = 1; i <= limit; i++) {
            outMessage += `${base} x ${i} = ${base * i}\n`;
        }

        return outMessage;
    }
}