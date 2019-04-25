/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddOfficeIdToUsersSchema extends Schema {
  up() {
    this.alter('users', table => {
      table
        .integer('office_id')
        .references('id')
        .inTable('offices')
        .index('office_id_index');
    });
  }

  down() {
    this.alter('users', table => {
      table.dropColumn('office_id');
    });
  }
}

module.exports = AddOfficeIdToUsersSchema;
