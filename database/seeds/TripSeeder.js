'use strict'

/*
|--------------------------------------------------------------------------
| TripSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TripSeeder {
  async run () {
    await Factory.model('App/Models/Trip').createMany(5);
  }
}

module.exports = TripSeeder
