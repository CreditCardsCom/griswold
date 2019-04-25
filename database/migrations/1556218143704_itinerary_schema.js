/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ItinerarySchema extends Schema {
  up() {
    this.create('itineraries', table => {
      table.increments();
      table.integer('user_id').notNullable();
      table.integer('trip_id').notNullable();
      table.string('hotel', 254).nullable();
      table.string('flight_number', 254).nullable();
      table.datetime('outbound_depart_time').nullable();
      table.datetime('outbound_arrival_time').nullable();
      table.datetime('return_depart_time').nullable();
      table.datetime('return_arrival_time').nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('itineraries');
  }
}

module.exports = ItinerarySchema;
