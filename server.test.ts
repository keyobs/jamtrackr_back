import app from './src/app';
import request from 'supertest';

// Mock environment variables to avoid reliance on external factors
jest.mock('dotenv', () => ({
    config: jest.fn().mockReturnValue({ PORT: 9001 }),
}));

describe('Express backend tests', () => {
    let server;

    beforeEach(() => {
        server = app.listen(process.env.PORT);
    });

    afterEach(() => {
        server.close();
    });

    it('should respond with "you summouned me !" on GET /api', async () => {
        const response = await request(server).get('/api');

        expect(response.status).toBe(200);
        expect(response.text).toBe('you summouned me !');
    });
});
