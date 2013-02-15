hide_nav =  function() {
	if($('.btn-navbar').is(":visible"))
		$('.btn-navbar').click();
};

$("html").keydown(function(event) {
	if(event.keyCode==37){
  		$(".page-controls .left").click();
	}
	if(event.keyCode==39){
  		$(".page-controls .right").click();
	}
});

$('#about-content').fitVids();
