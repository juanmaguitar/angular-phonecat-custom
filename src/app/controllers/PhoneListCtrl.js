class PhoneListCtrl {
  constructor (Phone) {
    'ngInject';
    this.phones = Phone.query();
  	this.orderProp = 'age';
  }
}

export default PhoneListCtrl;