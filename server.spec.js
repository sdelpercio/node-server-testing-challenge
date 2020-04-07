const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
	describe('GET /prospects', () => {
		it('should respond with a 200 OK', async () => {
			const response = await request(server).get('/prospects');

			expect(response.status).toBe(200);
		});
		it('should should respond with an json array', () => {
			return request(server)
				.get('/prospects')
				.then(res => {
					expect(res.type).toMatch(/json/i);
				});
		});
	});
	//
	describe('POST /prospects', () => {
		it('should respond with a 201 CREATED', () => {
			return request(server)
				.post('/prospects')
				.send({
					name: 'Jalen Reagor',
					grade: 5.83,
					position: 'WR',
					strengths: 'Good punt returner',
					weaknesses: 'Has had too many drops'
				})
				.then(res => {
					expect(res.status).toBe(201);
				});
		});
		it('should respond with a json message', () => {
			return request(server)
				.post('/prospects')
				.send({
					name: 'Jalen Reagor',
					grade: 5.83,
					position: 'WR',
					strengths: 'Good punt returner',
					weaknesses: 'Has had too many drops'
				})
				.then(res => {
					expect(res.body.message);
				});
		});
	});
	//
	describe('DELETE /prospects/:id', () => {
		it('should respond with a 200 OK', () => {
			return request(server)
				.delete('/prospects/3')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});
		it('should respond with a json message', () => {
			return request(server)
				.delete('/prospects/3')
				.then(res => {
					expect(res.body.message).toBe('successfully deleted prospect');
				});
		});
	});
});
