/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TripSchema extends Schema {
  up() {
    this.create('trips', table => {
      table.increments();
      table
        .string('name', 80)
        .notNullable()
        .unique();
      table.timestamps();
    });
  }

  down() {
    this.drop('trips');
  }
}

module.exports = TripSchema;
