/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Hash = use('Hash');

Factory.blueprint('App/Models/User', async (faker, i, data) => ({
  username: faker.username(),
  name: data.name ? data.name : faker.name(),
  email: faker.email(),
  password: await Hash.make(faker.password())
}));

Factory.blueprint('App/Models/Office', async faker => ({
  name: faker.city(),
  coord: `(${faker.coordinates()})`
}));

Factory.blueprint('App/Models/Trip', async faker => ({
  name: faker.word(),
  start_date: faker.date(),
  end_date: faker.date(),
  origin_office_id: 1,
  destination_office_id: 2
}));
