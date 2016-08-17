$('.portfolio__img').responsiveEqualHeightGrid();

// Progress Bar

jQuery(document).ready(function(){
	jQuery('.skills__row').each(function(){
		jQuery(this).find('.skills__bar').animate({
			width:jQuery(this).attr('data-percent')
		},3000);
	});
});