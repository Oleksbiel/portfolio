$('.portfolio__img').responsiveEqualHeightGrid();

function HeaderListScroll(list) {
	if (!list) return;
	this.list = list;
	this.scrollDone = true;
	this.scrollTime = 3;
	this.list.addEventListener("click", this.computeProps.bind(this));
};

HeaderListScroll.prototype.computeProps = function() {
	event.preventDefault();
	if (event.target.tagName != "A") return;
	if (!this.scrollDone) return;
	this.scrollDone = false;
	var allBlocks = document.querySelectorAll(".block"),
		position;
	for (var i = 0; i < allBlocks.length; i++) {
		if (allBlocks[i].dataset.name == event.target.innerHTML) {
			position = getPosition(allBlocks[i]);
			this.scrollingTo(position.y);
			this.undoneScrollProtection(position.y);
			return;
		};
	};
};

HeaderListScroll.prototype.scrollingTo = function(destination) {
	var $this = this,
		step;
	if (destination % 5 != 0) {
		destination = destination - (destination % 5);
	};
	step = (destination > 0) ? 5 : -5;
	if (destination == 0) return;
	setTimeout(function() {
		window.scrollBy(0, step);
		destination -= step;
		$this.scrollingTo(destination);
	}, $this.scrollTime);
};

HeaderListScroll.prototype.undoneScrollProtection = function(position) {
	var $this = this,
		time = (position / 5 * $this.scrollTime * 1.25);
	time = (time > 0) ? time : -time;
	setTimeout(function() {
		$this.scrollDone = true;
	}, time);
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