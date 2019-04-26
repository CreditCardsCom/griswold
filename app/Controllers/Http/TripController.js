const Trip = use('App/Models/Trip');
const { validateAll } = use('Validator');
const moment = require('moment');

class TripController {
  async index({ view, request }) {
    let tripsQuery = Trip.query()
      .with('origin')
      .with('destination')
      .where('end_date', '>', moment().subtract(4, 'days'));

    if (request.get().user_id) {
      tripsQuery = tripsQuery.whereHas('itineraries', builder => {
        builder.where('user_id', request.get().user_id);
      });
    }

    const trips = await tripsQuery.fetch();

    return view.render('trip.index', { trips: trips.toJSON() });
  }

  async show({ view, params }) {
    const trip = await Trip.query()
      .with('itineraries')
      .with('itineraries.user')
      .where('id', params.id)
      .firstOrFail();

    return view.render('trip.show', { trip: trip.toJSON() });
  }

  async create({ view }) {
    return view.render('trip.create');
  }

  async store({ session, request, response }) {
    const data = request.only(['name']);

    const validation = await validateAll(data, {
      name: 'required'
    });

    if (validation.fails()) {
      session.withErrors(validation.messages()).flashAll();

      return response.redirect('back');
    }

    await Trip.create(data);

    return response.redirect('/trips');
  }
}

module.exports = TripController;
