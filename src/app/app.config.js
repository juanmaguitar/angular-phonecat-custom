import phoneList from '../views/phone-list.html';
import phoneDetail from '../views/phone-detail.html';

function routing ( $routeProvider, $locationProvider ) {
  'ngInject';
  $locationProvider.html5Mode(false);

  $routeProvider
		.when('/phones', {
		  templateUrl: phoneList,
		  controller: 'PhoneListCtrl'
		})
		.when('/phones/:phoneId', {
			templateUrl: phoneDetail,
		  controller: 'PhoneDetailCtrl'
		})
		.otherwise({
		  redirectTo: '/phones'
		});
};

export default routing;
