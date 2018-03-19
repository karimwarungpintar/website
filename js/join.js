$(document).ready(function() {

	var windw = this;

	$.fn.followTo = function ( pos ) {
		var $this = this,
			$window = $(windw),
			thisHeight = $(document).outerHeight(true);
			
		$window.scroll(function(e){
			if(Modernizr.mq('(min-width:768px)')) {
				if ($window.scrollTop() > thisHeight - pos) {
					$this.css({
						position: 'absolute',
						top: thisHeight - pos
					});
				} else {
					$this.css({
						position: 'fixed',
						top: 80
					});
				}
			}
			else {
				$this.css({
					position: 'relative'
				});
			}
		});
	};

	$('.registeration').followTo(185);
});
