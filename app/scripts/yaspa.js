// This file contains custom javascript code for YASPA.

$(document).ready(function(){
	$("#contact").submit(function() {
		//Do the AJAX post
		$.post("../php/contact.php", $("#contact").serialize(), function(data){
			if (data == 1) {
			  $("#contact").hide("slow");
			  $("#contact-form").append("Thanks for contacting us. We will get back to you shortly").show("slow");
			}
		});
		//Disable default POST.
		return false;
	});
});    
(jQuery)