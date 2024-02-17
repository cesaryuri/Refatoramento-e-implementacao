const request = require('supertest');
const app = require('./api'); 

describe('Testando API de lançamento de dados', () => {
    it('Deve simular um lançamento básico de dados', async () => {
        const response = await request(app).get('/roll');
        expect(response.status).toBe(200);
        expect(response.body.resultado_dados).toBeGreaterThanOrEqual(1); // Ajuste para acessar resultado_dados
        expect(response.body.resultado_dados).toBeLessThanOrEqual(6); // Ajuste para acessar resultado_dados
    });

    it('Deve retornar um erro 404 se a rota não for encontrada', async () => {
        const response = await request(app).get('/rota-inexistente');
        expect(response.status).toBe(404);
    });
});
