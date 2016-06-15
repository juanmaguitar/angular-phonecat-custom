// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.scss';

// JS App
import angular from 'angular';
import ngRoute from 'angular-route';

import phoneList from './components/phone-list';
import phoneDetail from './components/phone-detail';

import routing from './app.config.js';

angular.module('phonecatApp', [ ngRoute,  phoneList, phoneDetail ])
  .config(routing);

