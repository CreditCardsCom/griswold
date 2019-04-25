/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Trip extends Model {
  origin() {
    return this.belongsTo('App/Models/Office', 'origin_office_id');
  }

  destination() {
    return this.belongsTo('App/Models/Office', 'destination_office_id');
  }

  itineraries() {
    return this.hasMany('App/Models/Itinerary');
  }
}

module.exports = Trip;
