import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('author', function() {
    this.route('show',{path:'/:authorId'});
    this.route('edit',{path:'/edit/:authorId'});
    this.route('new');
  });
});

export default Router;
