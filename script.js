$(document).ready(function() {
	
	
	
	
	
	
		
    $('#fullpage').fullpage({
    	css3:true,
        anchors:['Hi','About', 'Portfolio', 'Contact'],
        loopBottom: true,
		continuousVertical: true,
		recordHistory: false,
		scrollBar: true,
		menu: '#myMenu',
		
		afterRender: function(){
			
			
			$("input").focus(function() {			
		$("label[for='" + this.id + "']").addClass("curFocus");
	})
	
		$("input").blur(function(){
			$("label[for='" + this.id + "']").removeClass("curFocus");
		})
				
				
				
$('.slider').slick({
  
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed:4000,
 
  
  
   responsive: [
       {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  
  
  
  
  
});
				
				
				
				
			
		}
    });
    
   
    
    
    
});