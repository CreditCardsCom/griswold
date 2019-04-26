const InvalidIdParamException = use('App/Exceptions/InvalidIdParamException');

class EnforceIntegerIdParam {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ params }, next) {
    if (params != null && params.id) {
      const int = parseInt(params.id, 10);

      if (isNaN(int)) {
        throw new InvalidIdParamException();
      }
    }

    await next();
  }
}

module.exports = EnforceIntegerIdParam;
