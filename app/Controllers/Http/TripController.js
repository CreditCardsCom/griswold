const Trip = use('App/Models/Trip');

class TripController {
  async index({ view }) {
    const trips = await Trip.all();

    return view.render('trip.index', { trips: trips.toJSON() });
  }

  async view({ view, params }) {
    const trip = await Trip.findOrFail(params.id);

    return view.render('trip.view', { trip: trip.toJSON() });
  }

  async create({ view }) {
    return view.render('trip.create');
  }
}

module.exports = TripController;
