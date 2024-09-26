// test/server.test.js
const request = require('supertest');
const { app, server } = require('../server'); // Importer l'application depuis server.js

const dotenv = require('dotenv');

dotenv.config();

jest.setTimeout(10000); // Timeout global pour 10 secondes


describe('API Routes', () => {
    afterAll(async () => {
        if (server && server.close) {
            await new Promise(resolve => server.close(resolve)); // Fermer le serveur proprement
        }
    });

    it('should return a 200 status for the health route', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
    });

    it('should return a secret value for the /secret route with valid API key', async () => {

        const secretApiKey = process.env.SECRET_API_KEY;
        if (!secretApiKey) {
            console.warn('SECRET_API_KEY is not set. Skipping this test.');
            return; // Skipper le test si la clé API n'est pas définie
        }
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

    it('should return 500 for the /bug route', async () => {
        const response = await request(app).get('/bug');
        expect(response.status).toBe(500);
    });

    it('should handle errors on /error route', async () => {
        const response = await request(app).get('/error');
        expect(response.status).toBe(500); // Internal Server Error
    });


});
