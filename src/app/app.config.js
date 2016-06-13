function routing ($stateProvider, /* $urlRouterProvider, */$locationProvider) {
  'ngInject';
  $locationProvider.html5Mode(false);

  $stateProvider
    .state('base', {
      url: '/',
      views: {
        'body@': {
          template: require('../views/partials/phone-list.html'),
          controller: 'PhoneListCtrl',
          controllerAs: '$ctrl',
          bindToController: true
        }
      }
    });

  // $urlRouterProvider
		// .otherwise('/');
};

export default routing;
