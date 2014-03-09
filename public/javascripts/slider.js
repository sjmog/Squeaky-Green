var index = 0;
var $header = $('header');
var $sliderHolder = $header.find('.slider-holder');
var $sliderControls = $sliderHolder.find('.slider-controls');
var $slideLeft = $sliderControls.find('.slider-left');
var $slideRight = $sliderControls.find('.slider-right');
var $slider = $sliderHolder.find('.slider');
var $slides = $slider.find('.slide');
var numSlides = $slides.size();

var setHeight = function() {
	var height = $sliderHolder.height();
	$header.height(height);
};
var init = function() {
	var width = $sliderHolder.width();
	var $imgs = $slides.find('img');
	$imgs.width(width);
	setTimeout(function() {
		setHeight()}, 200);
};
var slideForward = function() {
	var width = $sliderHolder.width();
	$slider.css('transform', 'translateX(' + (-1*width*(index + 1)) + 'px)');
	index++
	if(index == numSlides - 1) {
		$slideRight.fadeOut();
	}
	$slideLeft.fadeIn();
};
var slideBackward = function() {
	var width = $sliderHolder.width();
	$slider.css('transform', 'translateX(' + (-1*width*(index - 1)) + 'px)');
	index--
	if(index == 0) {
		$slideLeft.fadeOut();
	}
	$slideRight.fadeIn();
};

$('#slider-left').click(function() {
	slideBackward();
});

$('#slider-right').click(function() {
	slideForward();
});

$(document).ready(function() {
	init()});