class PhoneListCtrl {
  constructor ($scope, Phone) {

  	var self = this;//this.phones =
    Phone.query( function(data) {
    	self.phones = data;
    	console.log(self)
    	console.log(self.phones)
    	console.log(self.phones[0].id)
    });
  	this.orderProp = 'age';
  }
}
PhoneListCtrl.$inject = ['$scope', 'Phone'];

export default PhoneListCtrl;