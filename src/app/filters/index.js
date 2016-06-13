import angular from 'angular';

import checkmark from './checkmark.js';

var filters = angular.module('filters', [])
  .filter('checkmark', checkmark)

export default filters;