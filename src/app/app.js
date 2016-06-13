import '../style/app.scss';
import angular from 'angular';
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';

import services from './services';
import controllers from './controllers';
import filters from './filters';
import routing from './app.config.js';

angular.module('phonecatApp', [ ngRoute, services, controllers, filters ])
  .config(routing);

console.log("init...");

