// This file contains custom javascript code for YASPA.

$(function(){
    $(form).ajaxSubmit({
    url: '../php/contact.php',
    success: function() {
    $('#contact').hide();
    $('#contact-form').append("<p class='thanks'>Thanks! Your request has been sent.</p>")
    }
    });
});         
(jQuery)