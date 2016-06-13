import angular from 'angular';

import checkmark from './checkmark.js';

angular.module('phonecatFilters', [])
  .filter('checkmark', checkmark)

export default 'phonecatFilters';