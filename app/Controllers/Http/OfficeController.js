const Office = use('App/Models/Office');
const { validate } = use('Validator');

/**
 * Resourceful controller for interacting with offices
 */
class OfficeController {
  /**
   * Show a list of all offices.
   * GET offices
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ view }) {
    const offices = await Office.all();

    return view.render('office.index', { offices: offices.toJSON() });
  }

  /**
   * Render a form to be used for creating a new office.
   * GET offices/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ view }) {
    return view.render('office.create');
  }

  /**
   * Create/save a new office.
   * POST offices
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const params = request.only(['name', 'coord']);
    const { id } = await Office.create(params);

    return response.route('OfficeController.show', { id });
  }

  /**
   * Display a single office.
   * GET offices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, view }) {
    const office = await Office.findOrFail(params.id);

    return view.render('office.show', { office: office.toJSON() });
  }

  /**
   * Render a form to update an existing office.
   * GET offices/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
    const office = await Office.findOrFail(params.id);

    return view.render('office.edit', { office: office.toJSON() });
  }

  /**
   * Update office details.
   * PUT or PATCH offices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const params = request.only(['name', 'coord'])
    const office = await Office.findOrFail(params.id)

    office.merge(params);

    await office.save();

    return response.route('OfficeController.index');
  }

  /**
   * Delete a office with id.
   * DELETE offices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, response }) {
    const office = await Office.findOrFail(params.id);

    await office.delete();

    return response.route('OfficeController.index');
  }
}

module.exports = OfficeController;
