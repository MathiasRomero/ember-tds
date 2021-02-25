import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('testNew');
  this.route('testList');
  this.route('contacts', function() {
    this.route('add');
    this.route('update');
  });
  this.route('categories', function() {
    this.route('add');
    this.route('update', {path: '/update/:category_id'});
    this.route('contacts' {path: '/contacts/:category_id'}, function() {
      this.route('add');
      this.route('update', { path: '/updatecontact/:category_id'});
    });
  });
});
