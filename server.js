const express = require('express');
const Prospect = require('./prospects/prospect-model');

const server = express();

server.use(express.json());

server.get('/prospects', (req, res) => {
	Prospect.getAll()
		.then(prospects => {
			res.status(200).json(prospects);
		})
		.catch(err => {
			res.status(500).json({ error: 'issue getting prospects', err });
		});
});
server.post('/prospects', (req, res) => {
	const newProspect = req.body;

	Prospect.insert(newProspect)
		.then(id => {
			res.status(201).json({ message: `created new prospect with id:${id}` });
		})
		.catch(err => {
			res.status(500).json({ error: 'issue creating prospect', err });
		});
});
server.delete('/prospects/:id', (req, res) => {
	const { id } = req.params;

	Prospect.remove(id)
		.then(() => {
			res.status(200).json({ message: 'successfully deleted prospect' });
		})
		.catch(err => {
			res.status(500).json({ error: 'issue deleting prospect', err });
		});
});

module.exports = server;
