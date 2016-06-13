import '../style/app.scss';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import controllers from './controllers';
import filters from './filters';
import services from './services';

import routing from './app.config.js';

console.log (angular);
console.log (uirouter);
console.log (routing);
console.log (controllers);
console.log (filters);
console.log (services);

angular.module('phonecatApp', [uirouter, controllers /* , filters, services */])
  .config(routing);
