$(function(){
  $(window).on("load",function() {
	$(".top_bg").animate({opacity:"1"}, 700, function() {
	  $(".top_ttl").animate({opacity:"1"}, 650);
	});
  });

  $(window).scroll(function (){
		$(".inview").each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 150){
				$(this).addClass("scrollin");
			}
		});
	});
  $(".humberger_wrap").on("click", function() {
	$(".sns").toggleClass("clickin"),
		$(".hum_1").toggleClass("effect_2"), 
		$(".hum_2").toggleClass("effect_1"),
		$(".hum_3").toggleClass("effect_3"), function() {
		};
  });



});
