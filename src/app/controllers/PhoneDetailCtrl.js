class PhoneDetailCtrl {
  constructor ($routeParams, Phone) {
    'ngInject';
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

export default PhoneDetailCtrl;