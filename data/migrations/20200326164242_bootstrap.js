exports.up = function(knex) {
	return knex.schema.createTable('prospects', tbl => {
		tbl.increments();
		tbl.string('name', 128).notNullable();
		tbl.float('grade', 3, 2).notNullable();
		tbl.string('position', 64).notNullable();
		tbl.text('strengths').notNullable();
		tbl.text('weaknesses').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('prospects');
};
