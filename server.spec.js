const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
	describe('GET /prospects', () => {
		it('should respond with a 200 OK', async () => {
			const response = await request(server).get('/prospects');

			expect(response.status).toBe(200);
		});
		it('should should respond with an json array', () => {
			request(server)
				.get('/prospects')
				.then(res => {
					expect(res.type).toMatch(/json/i);
				});
		});
	});
	//
	describe('POST /prospects', () => {
		it.todo('should respond with a 201 CREATED');
		it.todo('should respond with a json message');
	});
	//
	describe('DELETE /prospects/:id', () => {
		it.todo('should respond with a 200 OK');
		it.todo('should respond with a json message');
	});
});
