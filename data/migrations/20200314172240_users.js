exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl
      .string('email', 128)
      .notNullable()
      .unique();
    tbl
      .string('username', 128)
      .notNullable()
      .unique();
    tbl.string('password').notNullable();
    tbl.string('city').notNullable();
    tbl
      .integer('state_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('states')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
