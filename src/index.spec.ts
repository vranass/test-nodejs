import request from 'supertest';
import server from './index';

describe('Test de l\'API /books', () => {
    it('devrait récupérer tous les livres', async () => {
        const response = await request(app).get('/books');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(2);
    });
});
