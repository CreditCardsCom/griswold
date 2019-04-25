/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Office extends Model {
  users() {
    return this.hasMany('App/Models/User');
  }
}

module.exports = Office;
