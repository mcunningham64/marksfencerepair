{var mMe="mike@"
var yMe="theusers.info"}

$(document).ready(function(){
    $("#featured").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 7000, true);  
    $("#featured").hover(  
        function() {  
            $("#featured").tabs("rotate",0,true);  
        },  
        function() {  
            $("#featured").tabs("rotate",7000,true);  
        }  
    );  
	
	$("#estimates").fancybox({
					'width'				: '52%',
					'height'			: '85%',
					'autoScale'			: false,
					'transitionIn'		: 'none',
					'transitionOut'		: 'none',
					'type'				: 'iframe'
				});
	$(".contact").fancybox({
					'width'				: '52%',
					'height'			: '85%',
					'autoScale'			: false,
					'transitionIn'		: 'none',
					'transitionOut'		: 'none',
					'type'				: 'iframe'
				});
	$("#email").html('<a href="mailto:'+ mMe + yMe +'?subject=Mark&apos;s Fence Website">Mike</a>');
});