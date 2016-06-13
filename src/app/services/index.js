import angular from 'angular';
import ngResource from 'angular-resource';

import Phone from './Phone.js';

angular.module('phonecatServices', [ngResource])
  .factory('Phone', Phone)

export default 'phonecatServices';