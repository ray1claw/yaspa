

keyControls = function(event) {
	// event.preventDefault();
	if(event.which == 37) {
  		$('.page-controls .left').click();
	}
	if(event.which == 39) {
  		$('.page-controls .right').click();
	}
}
