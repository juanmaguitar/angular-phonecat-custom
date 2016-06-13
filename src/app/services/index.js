import angular from 'angular';
import resource from 'angular-resource';

import Phone from './Phone.js';

var services = angular.module('services', [resource])
  .factory('Phone', Phone)

export default services;