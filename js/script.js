{var mMe="mike@"
var yMe="theusers.info"}

$(document).ready(function(){
	$("#email").html('<a href="mailto:'+ mMe + yMe +'?subject=Mark&apos;s Fence Website">Mike</a>');
	$("#featured").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 7000, true);
	$("#featured").hover(
		function() {
			$("#featured").tabs("rotate",0,true);
		},
		function() {
			$("#featured").tabs("rotate",7000,true);
		});
	$(".contact").fancybox({
					'scrolling'			: 'auto',
					'width'				: '25%',
					'height'			: '87%',
					'autoScale'			: false,
					'transitionIn'		: 'none',
					'transitionOut'		: 'none',
					'type'				: 'iframe'
				});
	$("#estimates").fancybox({
					'scrolling'			: 'auto',
					'width'				: '25%',
					'height'			: '87%',
					'autoScale'			: false,
					'transitionIn'		: 'none',
					'transitionOut'		: 'none',
					'type'				: 'iframe'
				});
});