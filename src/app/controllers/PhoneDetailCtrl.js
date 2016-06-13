class PhoneDetailCtrl {
  constructor ($routeParams, Phone) {
		this.phone = Phone.get(
			{ phoneId: $routeParams.phoneId },
			function(phone) {
				this.mainImageUrl = phone.images[0];
			}
		);
		this.setImage = function(imageUrl) {
			this.mainImageUrl = imageUrl;
		}
	}
}

PhoneDetailCtrl.$inject = ['$routeParams', 'Phone'];

export default PhoneDetailCtrl;