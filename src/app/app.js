import '../style/app.scss';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';

import controllers from './controllers';
import filters from './filters';
import services from './services';

angular.module('phonecatApp', ['uirouter', 'controllers', 'filters', 'services'])
  .config(routing);
