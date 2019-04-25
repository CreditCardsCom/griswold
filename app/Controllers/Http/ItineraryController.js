/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Itinerary = use('App/Models/Itinerary');
const { validateAll } = use('Validator');

/**
 * Resourceful controller for interacting with itineraries
 */
class ItineraryController {
  /**
   * Show a list of all itineraries.
   * GET itineraries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new itinerary.
   * GET itineraries/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ params, view }) {
    return view.render('itinerary.create', { trips_id: params.trips_id });
  }

  /**
   * Create/save a new itinerary.
   * POST itineraries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ session, params, request, response, auth }) {
    const data = request.only([
      'hotel',
      'flight_number',
      'outbound_depart_time',
      'outbound_arrival_time',
      'return_depart_time',
      'return_arrival_time'
    ]);
    // const validation = await validateAll(data, {
    //   title: 'required',
    //   body: 'required'
    // });

    // if (validation.fails()) {
    //   session.withErrors(validation.messages()).flashAll();

    //   return response.redirect('back');
    // }

    console.log(request);

    const userId = (await auth.getUser()).id;
    const itinerary = { ...data, user_id: userId, trip_id: params.trips_id };

    await Itinerary.create(itinerary);

    return response.route('trips.show', { id: params.trips_id });
  }

  /**
   * Display a single itinerary.
   * GET itineraries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing itinerary.
   * GET itineraries/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update itinerary details.
   * PUT or PATCH itineraries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a itinerary with id.
   * DELETE itineraries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = ItineraryController;
