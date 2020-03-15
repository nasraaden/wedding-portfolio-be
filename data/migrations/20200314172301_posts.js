exports.up = function(knex) {
  return knex.schema.createTable('posts', tbl => {
    tbl.increments();
    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.string('partner_one').notNullable();
    tbl.string('partner_two').notNullable();
    tbl.string('city').notNullable();
    tbl
      .integer('state_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('states')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.string('description').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
