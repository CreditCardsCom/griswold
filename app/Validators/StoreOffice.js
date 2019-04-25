class StoreOffice {
  get rules() {
    return {
      name: 'required|string|unique:offices',
      coord: 'required'
    };
  }
}

module.exports = StoreOffice;
