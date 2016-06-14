import phoneList from 'phone-list.html';
import phoneDetail from 'phone-detail.html';

function routing ( $routeProvider, $locationProvider ) {
  'ngInject';
  $locationProvider.html5Mode(false);

  $routeProvider
		.when('/phones', {
		  template: phoneList,
		  controller: 'PhoneListCtrl',
		  controllerAs: '$ctrl'
		})
		.when('/phones/:phoneId', {
			template: phoneDetail,
		  controller: 'PhoneDetailCtrl',
		  controllerAs: '$ctrl'
		})
		.otherwise({
		  redirectTo: '/phones'
		});
};

export default routing;
