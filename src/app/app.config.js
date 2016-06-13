function routing ($urlRouterProvider, $locationProvider) {
  'ngInject';
  $locationProvider.html5Mode(false);
  $urlRouterProvider
 		when('/phones', {
			templateUrl: 'partials/phone-list.html',
			controller: 'PhoneListCtrl'
		}).
		when('/phones/:phoneId', {
			templateUrl: 'partials/phone-detail.html',
			controller: 'PhoneDetailCtrl'
		})
  .otherwise('/');
};

export default routing;
