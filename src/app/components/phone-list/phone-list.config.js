const template = '<phone-list></phone-list>';

function routing ( $routeProvider, $locationProvider ) {
  $routeProvider.when('/phones', { template } )
};

routing.$inject = ['$routeProvider', '$locationProvider'];

export default routing;
