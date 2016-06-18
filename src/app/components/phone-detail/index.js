import angular from 'angular';

import ngRoute from 'angular-route';
import services from '../../services';
import filters from '../../filters';

import template from './phone-detail.template.html';
import controller from './phone-detail.controller.js';

const phoneDetail = angular.module('phoneDetail', [ ngRoute , services, filters ])
	.component('phoneDetail', {
		template,
		controller
	})

export default phoneDetail;