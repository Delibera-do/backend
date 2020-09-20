
exports.up = function(knex) {
  return knex.schema.createTable('appointment',(table) => {
    table.string('id').primary(); 
    table.string('title').notNullable(); 
    table.string('link').notNullable(); 
    table.string('description').notNullable(); 
    table.datetime('date', { precision: 6 }).defaultTo(knex.fn.now());
    table.string('local').notNullable(); 
    table.string('owner_phone').notNullable(); 
    table.foreign('owner_phone').references('phone').inTable('user');
});
}

exports.down = function(knex) {
  return knex.schema.dropTable('appointment');
};


