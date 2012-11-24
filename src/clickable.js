var Clickable = function (Zepto, jQuery) {
	// import Clickable._os                 from utils.js
	// import Clickable._enableClicking     from core.js
	// import Clickable._enableStickyClick  from stickyClick.js


	function Clickable () {
		Clickable._enableClicking.apply(this, arguments);
	}
	Clickable.touchable = function () {
		return Clickable._os.touchable;
	};
	Clickable.sticky = function () {
		Clickable._enableStickyClick.apply(this, arguments);
	};


	if (jQuery) {
		jQuery.fn.clickable = function (activeClass) {
			this.each(function () {
				Clickable._enableClicking(this, activeClass);
			});
			return this;
		};
		jQuery.fn.stickyClick = function (holdFunction) {
			this.each(function () {
				Clickable._enableStickyClick(this, holdFunction);
			});
			return this;
		};
	}


	if (Zepto) {
		Zepto.extend(Zepto.fn, {
			clickable : function (activeClass) {
				this.forEach(function (elem) {
					Clickable._enableClicking(elem, activeClass);
				});
				return this;
			},
			stickyClick : function (holdFunction) {
				this.forEach(function (elem) {
					Clickable._enableStickyClick(elem, holdFunction);
				});
				return this;
			}
		});
	}


	return Clickable;
}(window.Zepto, window.jQuery);
