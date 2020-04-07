const db = require('../data/dbConfig');

module.exports = {
	getAll,
	insert,
	remove
};

function getAll() {
	return db('prospects');
}

function insert(newProspect) {
	return db('prospects').insert(newProspect);
}

function remove(id) {
	return db('prospects')
		.where({ id })
		.del();
}
