function Contact() {
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

var initializeForm = function(contact) {
    $('input#update-first-name').val(contact.firstName);
    $('input#update-last-name').val(contact.lastName);
    $('input#update-address').val(contact.address);
    $('form#edit-contact').submit(function() {
        contact.contactLabel.removeParent();
        event.preventDefault();
        var replacement = {
            firstName: $('input#update-first-name').val(),
            lastName: $('input#update-last-name').val(),
            address: $('input#update-address').val()
        };
        addContact(replacement, $("ul#contacts"));
        this.reset();
        $('.edit-contact').hide();
    });
};

$(document).ready(function() {
    $('form#new-contact').submit(function(event) {
        event.preventDefault();
        var contact = {
            firstName: $('input#new-first-name').val(),
            lastName: $('input#new-last-name').val(),
            address: $('input#new-address').val()
        };
        addContact(contact, $("ul#contacts"));
        this.reset();
    });
});

var addContact = function(contact, addToNode) {
    contact.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
    addToNode.append("<li><span class='contact'>" + contact.fullName() + "</span></li>");
    var contactLabel = $(".contact").last();
    contact.contactLabel = contactLabel;
    contactLabel.click(function() {
        $("#show-contact").show();

        $("#show-contact h2").text(contact.fullName());
        $(".first-name").text(contact.firstName);
        $(".last-name").text(contact.lastName);
        $(".address").text(contact.address);

        $("#show-contact button").click(function(event) {
            initializeForm(contact);
            $("#show-contact").hide();
            $(".edit-contact").show();

        });
    });
    contactLabel.removeParent = function () {
          this[0].parentNode.parentNode.removeChild(this[0].parentNode);
    };
    return contactLabel;
};