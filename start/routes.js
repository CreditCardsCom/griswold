/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('logout', 'UserController.logout');
Route.get('login', 'UserController.login');

Route.on('/')
  .render('welcome')
  .middleware(['auth']);

Route.resource('trips', 'TripController');
Route.resource('offices', 'OfficeController');
Route.resource('trips.itineraries', 'ItineraryController');
