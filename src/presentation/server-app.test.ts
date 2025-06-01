import {ServerApp} from "./server-app";

describe('Server App', (): void => {
    test('Should be create Server App instance', (): void => {
        const serverApp: ServerApp = new ServerApp();

        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');
    })
});