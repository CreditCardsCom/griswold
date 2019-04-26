class ExceptionController {
  async notFound({ view }) {
    return view.render('exception.not-found');
  }
}

module.exports = ExceptionController;
