$('.portfolio__img').responsiveEqualHeightGrid();

// Progress Bar

jQuery(document).ready(function(){
	jQuery('.skills__row').each(function(){
		jQuery(this).find('.skills__bar').animate({
			width:jQuery(this).attr('data-percent')
		},3000);
	});
});

// Hamburger

$(document).ready(function() {
	var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
	$('.hamburger').click(function(){
		$('.header__nav-burger').slideToggle(1000);
	});
});
