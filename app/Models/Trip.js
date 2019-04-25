/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Trip extends Model {
  origin() {
    return this.hasOne('App/Models/Location');
  }

  destination() {
    return this.hasOne('App/Models/Location');
  }
}

module.exports = Trip;