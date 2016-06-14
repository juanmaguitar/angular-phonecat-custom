class PhoneListCtrl {
  constructor (Phone) {

    this.phones = Phone.query();
    this.orderProp = 'age';
  }
}
PhoneListCtrl.$inject = ['Phone'];

export default PhoneListCtrl;