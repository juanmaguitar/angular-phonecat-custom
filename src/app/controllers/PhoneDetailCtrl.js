class PhoneDetailCtrl {
  constructor ($routeParams, Phone) {
		var phoneId = $routeParams.phoneId;
		this.phone = Phone.get(
			{ phoneId },
			(phone) => this.mainImageUrl = phone.images[0]
		);
		this.setImage = function(imageUrl) {
			this.mainImageUrl = imageUrl;
		}
	}
}

PhoneDetailCtrl.$inject = ['$routeParams', 'Phone'];

export default PhoneDetailCtrl;