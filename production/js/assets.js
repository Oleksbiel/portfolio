$('.portfolio__img').responsiveEqualHeightGrid();

function HeaderListScroll(list) {
	var $this = this;
	if (!list) return;
	this.list = list;
	this.properties = {
		"Home": 0,
		"About Me": 600,
		"Skills": "",
		"My Works": "",
		"Contact": "" 
	};
	this.list.addEventListener("click", function() {$this.computeProps($this.properties)});
};

HeaderListScroll.prototype.computeProps = function(properties) {
	console.log(event.target);
	event.preventDefault();
	if (event.target.tagName != "A") return;
	for (i in properties) {
		if (event.target.innerHTML == i) {
			this.scrollingTo(properties[i]);
		};
	};
	console.log(event.target);
};

HeaderListScroll.prototype.scrollingTo = function(destination) {
	var $this = this,
		diff = destination - window.pageYOffset,
		step;
	if (diff % 5 != 0) {
		diff = diff - (diff % 5);
	};
	step = (diff > 0) ? 5 : -5;
	if (diff == 0) return;
	console.log(diff);
	setTimeout(function() {
		window.scrollBy(0, step);
		$this.scrollingTo(destination);
	}, 4);
};

new HeaderListScroll(document.querySelector(".header__list"));




// Helper function to get an element's exact position
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;
 
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}
 
// deal with the page getting resized or scrolled
window.addEventListener("scroll", updatePosition, false);
window.addEventListener("resize", updatePosition, false);
 
function updatePosition() {
  // add your code to update the position when your browser
  // is resized or scrolled
}

// Progress Bar

jQuery(document).ready(function(){
	jQuery('.skills__row').each(function(){
		jQuery(this).find('.skills__bar').animate({
			width:jQuery(this).attr('data-percent')
		},3000);
	});
});