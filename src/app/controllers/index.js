import angular from 'angular';
import uirouter from 'angular-ui-router';

import services from '../services';
import PhoneListCtrl from './PhoneListCtrl.js';
import PhoneDetailCtrl from './PhoneDetailCtrl.js';

var controllers = angular.module('controllers', [uirouter, services])
  .controller('PhoneListCtrl', PhoneListCtrl)
  .controller('PhoneDetailCtrl', PhoneDetailCtrl)

export default controllers;