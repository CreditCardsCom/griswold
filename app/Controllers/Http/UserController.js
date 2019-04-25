const User = use('App/Models/User');

class UserController {
  async login({ auth, request, response }) {
    // const { email, password } = request.all();
    // await auth.attempt(email, password);

    const user = await User.find(1);
    await auth.login(user);

    return response.redirect('/');
  }

  async logout({ auth }) {
    await auth.logout();

    return 'Logged out';
  }
}

module.exports = UserController;
