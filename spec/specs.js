describe('Contact', function() {
  describe('fullName', function() {
    it('combines the first and last name, separated by a space', function() {
      var testContact = new Contact();
      testContact.firstName = "Dolly";
      testContact.lastName = "Parton";
      testContact.fullName().should.equal("Dolly Parton");
    });
  });
});
describe('domTests', function() {
  it('writes contacts', function() {
    var c = {
      firstName: "troy",
      lastName: "mcgur",
      address: "543 adday"
    };
    var v = addContact(c, $("body"));
    v[0].innerText.should.equal("troy mcgur");
  
    v.removeParent();
  });
});