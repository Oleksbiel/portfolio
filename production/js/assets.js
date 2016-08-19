$('.portfolio__img').responsiveEqualHeightGrid();

// Start PageScroll MainConstructor

function PageScroll(obj, point, time) {
	if (!obj) return;
	this.obj = obj;
	this.point = point;
	this.scrollTime = time;
	this.obj.addEventListener("click", this.callComputeProps.bind(this));
};

PageScroll.prototype.callComputeProps = function() {
	event.preventDefault();
	this.scrollingTo(this.computeProps(this.point));
};

PageScroll.prototype.computeProps = function(point) {
	var allBlocks = document.querySelectorAll(".block"),
		position;
	for (var i = 0; i < allBlocks.length; i++) {
		if (allBlocks[i].dataset.name == point) {
			position = getPosition(allBlocks[i]);
		};
	};
	return position.y;
};

PageScroll.prototype.scrollingTo = function(destination) {
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

// End PageScroll MainConstructor

// Start AnchorScroll --> About Me 
new PageScroll(document.querySelector(".anchor"), "About Me", 3);
// End AnchorScroll --> About Me 

// Start HeaderListScroll

function HeaderListScroll(obj, time) {
	if (!obj) return;
	this.obj = obj;
	this.scrollTime = time;
	this.scrollDone = true;
	this.obj.addEventListener("click", this.callComputeProps.bind(this));
};

HeaderListScroll.prototype = new PageScroll; //inherit from MainConstructor

HeaderListScroll.prototype.callComputeProps = function() {
	var point;
	event.preventDefault();
	if (event.target.tagName != "A") return;
	if (!this.scrollDone) return;
	this.scrollDone = false;
	point = this.computeProps(event.target.innerHTML);
	this.scrollingTo(point);
	this.undoneScrollProtection(point);
};

HeaderListScroll.prototype.undoneScrollProtection = function(position) {
	var $this = this,
		time = (position / 5 * $this.scrollTime * 1.25);
	time = (time > 0) ? time : -time;
	setTimeout(function() {
		$this.scrollDone = true;
	}, time);
};

new HeaderListScroll(document.querySelector(".header__list"), 3);

// End HeaderListScroll

//Start AnchorScroll --> Top

function AnchorScrollTop(obj, point, visibleStart, time) {
	if (!obj) return;
	this.obj = obj;
	this.point = point;
	this.scrollTime = time;
	this.visibleStart = visibleStart;
	this.obj.addEventListener("click", this.callComputeProps.bind(this));
	window.addEventListener("scroll", this.makeVisible.bind(this));
};

AnchorScrollTop.prototype = new PageScroll; //inherit from MainConstructor

AnchorScrollTop.prototype.makeVisible = function() {
	var point = this.computeProps(this.visibleStart);
	if (point <= 5) {
		this.obj.style.display = "inline-block";
	} else {
		this.obj.style.display = "none";
	};
};

new AnchorScrollTop(document.querySelector(".anchor--scroll-top"), "Home", "About Me", 1);

//End AnchorScroll --> Top

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
