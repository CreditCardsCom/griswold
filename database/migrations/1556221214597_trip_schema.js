/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TripSchema extends Schema {
  up() {
    this.table('trips', table => {
      table
        .integer('origin_office_id')
        .references('id')
        .inTable('offices')
        .index('origin_office_id_index');
      table
        .integer('destination_office_id')
        .references('id')
        .inTable('offices')
        .index('destination_office_id_index');
    });
  }

  down() {
    this.table('trips', table => {
      table.dropColumn('origin_office_id');
      table.dropColumn('destination_office_id');
    });
  }
}

module.exports = TripSchema;
