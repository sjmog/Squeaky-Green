var index = 0;
var slideForward = function() {
	var $slider = $('.slider');
	var width = $slider.find('.slide').width();
	$slider.css('transform', 'translateX(' + (-1*width*(index + 1)) + 'px)');
	index++
};
var slideBackward = function() {
	var $slider = $('.slider');
	var width = $slider.find('.slide').width();
	$slider.css('transform', 'translateX(' + (-1*width*(index - 1)) + 'px)');
	index--
};

$('#slider-left').click(function() {
	slideBackward();
});

$('#slider-right').click(function() {
	slideForward();
});