const { LogicalException } = require('@adonisjs/generic-exceptions');

class InvalidIdParamException extends LogicalException {
  constructor() {
    super('Invalid id parameter passed to route', 400);
  }

  handle(error, { response }) {
    return response.redirect('back');
  }
}

module.exports = InvalidIdParamException;
