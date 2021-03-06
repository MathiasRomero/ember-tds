import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('Abstractroute');
  this.route('board');
  this.route('logout');
  this.route('section', function() {
    this.route('add');
    this.route('addProduct');
  });
  this.route('products', function() {
    this.route('add');
    this.route('update',{ path: '/update/:product_id'});
  });
  this.route('product');
  this.route('order',{ path: '/order/:order_id'});
});
