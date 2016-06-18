function routing ( $routeProvider, $locationProvider ) {

  $locationProvider.html5Mode(false);

  $routeProvider
		.when('/phones', {
		  template: '<phone-list></phone-list>'
		})
		.when('/phones/:phoneId', {
			template: '<phone-detail></phone-detail>',
			resolve: function() {
				console.log("resolve....")
			}
		})
		.otherwise({
		  redirectTo: '/phones'
		});
};

routing.$inject = ['$routeProvider', '$locationProvider'];

export default routing;
