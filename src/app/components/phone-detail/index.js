import angular from 'angular';

import ngRoute from 'angular-route';
import services from '../../services';
import filters from '../../filters';

import template from './phone-detail.template.html';
import controller from './phone-detail.controller.js';
import routing from './phone-detail.config.js';

const phoneDetail = angular.module('phoneDetail', [ ngRoute , services, filters ])
	.component('phoneDetail', { template, controller })
	.config(routing);

export default phoneDetail;