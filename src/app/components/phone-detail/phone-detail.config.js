const template = '<phone-detail></phone-detail>'
const redirectTo = '/phones'

function routing ( $routeProvider, $locationProvider ) {
  $routeProvider
  	.when('/phones/:phoneId', { template } )
  	.otherwise( { redirectTo } );
};

routing.$inject = ['$routeProvider', '$locationProvider'];

export default routing;
