import angular from 'angular';

import ngRoute from 'angular-route';
import services from '../../services';

import template from './phone-list.template.html';
import controller from './phone-list.controller.js';

angular.module('phoneList', [ ngRoute , services ])
	.component('phoneList', {
		template,
		controller
	})

export default 'phoneList';