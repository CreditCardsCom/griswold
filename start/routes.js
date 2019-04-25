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

Route.get('/', ({ response }) => response.redirect('/trips'));

Route.resource('trips', 'TripController').middleware('auth');
Route.resource('trips.itineraries', 'ItineraryController').middleware('auth');

Route.resource('offices', 'OfficeController')
  .middleware('auth')
  .validator(
    new Set([
      [['offices.store'], ['StoreOffice']],
      [['offices.update'], ['UpdateOffice']]
    ])
  );
