var Contact = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

$(document).ready(function() {
    $('form#new-contact').submit(function(event) {
        event.preventDefault();

        var inputtedFirstName = $('input#new-first-name').val();
        var inputtedLastName = $('input#new-last-name').val();
        var inputtedAddress = $('input#new-address').val();

        var new Contact = Object.create(Contact);
        newContact.firstName = inputtedFirstName;
        newContact.lastName = inputtedLastName;
        newContact.address = inputtedAddress;

        
    })
})