import angular from 'angular';

import ngRoute from 'angular-route';
import services from '../services';

import PhoneListCtrl from './PhoneListCtrl.js';
import PhoneDetailCtrl from './PhoneDetailCtrl.js';

angular.module('phonecatControllers', [ ngRoute , services ])
  .controller('PhoneListCtrl', PhoneListCtrl)
 	.controller('PhoneDetailCtrl', PhoneDetailCtrl)

export default 'phonecatControllers';