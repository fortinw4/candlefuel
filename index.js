$(function(){
	$('.slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		focusOnSelect: true
	});

	$('.candle').hide();
	$('.answer').hide();

	$('.question').click(function(){
		$('.question').hide();
		$('.candle').show();
		$('.answer').show();
	});

	$('.answer').click(function(){
		$('.answer').hide();
		$('.candle').hide();
		$('.question').show();
	})
});

