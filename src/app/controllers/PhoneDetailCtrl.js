class PhoneDetailCtrl {
  constructor ($routeParams, Phone) {

		Phone.get(
			{ phoneId: $routeParams.phoneId },
			function(phone) {
				console.log("por aqui...");
				this.mainImageUrl = phone.images[0];
			}
		).$promise.then(function(data) {
				console.log("data received...");
		    this.phone = data.toJSON();
		    console.log(this.phone);
		});

  // 	User.get( {username: 'bob'} ).$promise.then(function(data) {
		//     scope.user = data.toJSON();
		// });

		// this.phone = Phone.get(
		// 	{ phoneId: $routeParams.phoneId },
		// 	function(phone) {
		// 		this.mainImageUrl = phone.images[0];
		// 	}
		// );
		this.setImage = function(imageUrl) {
			this.mainImageUrl = imageUrl;
		}
	}
}

PhoneDetailCtrl.$inject = ['$routeParams', 'Phone'];

export default PhoneDetailCtrl;