// test/server.test.js
const request = require('supertest');
const { app } = require('../server'); // Importer l'application depuis server.js

describe('API Routes', () => {
    it('should return a 200 status for the health route', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
    });

    it('should return a secret value for the /secret route with valid API key', async () => {
        const response = await request(app)
            .get('/secret')
            .set('api-key', process.env.SECRET_API_KEY); // Remplacez par votre clé API réelle

        expect(response.status).toBe(200);
        expect(response.text).toBe(`Secret value is: ${process.env.SECRET_ENV}`);
    });

    it('should return 403 for the /secret route with invalid API key', async () => {
        const response = await request(app)
            .get('/secret')
            .set('api-key', 'invalid-key');

        expect(response.status).toBe(403); // Forbidden
    });

    it('should return 200 for the /bug route', async () => {
        const response = await request(app).get('/bug');
        expect(response.status).toBe(200);
    });

    it('should handle errors on /error route', async () => {
        const response = await request(app).get('/error');
        expect(response.status).toBe(500); // Internal Server Error
    });

    it('should crash the app for /crash_app route', async () => {
        const response = await request(app).get('/crash_app');
        expect(response.status).toBe(200); // Adjust according to your crash handling
    });
});
