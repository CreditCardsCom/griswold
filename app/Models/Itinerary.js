/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Itinerary extends Model {
  static get dates() {
    return super.dates.concat([
      'outbound_depart_time',
      'outbound_arrival_time',
      'return_depart_time',
      'return_arrival_time'
    ]);
  }

  user() {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = Itinerary;
