$(document).ready(function () {

	;
	(function (b) {
		b.cursor || (b.extend({
			cursor: function (d, e, c) {
				if (d)
					if ("string" === typeof d) {
						if (0 >= b(d).length) {
							switch (d.toLowerCase()) {
								case "clear":
									document.body.style.cursor = "default";
									break;
								case "ishover":
									var f = [];
									b("*").each(function () {
										var d = b.cursor.styles.position,
											c = b(this).position(),
											e = b(this).outerHeight(),
											j = b(this).outerWidth();
										0 < d.x - c.left && 0 < d.y - c.top && 0 < c.left + j - d.x && 0 < c.top + e - d.y && (f[f.length] = this)
									});
									console.log({
										pos: f
									});
									return f;
								case "position":
									return b.cursor.styles.position;
								case "url":
									document.body.style.cursor =
										e ? "string" === typeof e ? e : "default" : "default";
									break;
								case "x":
									return b.cursor.styles.position.x;
								case "y":
									return b.cursor.styles.position.y;
								default:
									document.body.style.cursor = d
							}
							return document.body.style.cursor
						}
						if (0 < b(d).length) return b(d).cursor(e, c)
					} else if ("object" === typeof d) return b(d).cursor(e, c);
				return document.body.style.cursor
			}
		}), b.fn.extend({
			cursor: function (d) {
				Array.prototype.slice.call(arguments, 1);
				var e = d,
					c = b(this);
				if (void 0 === e) return c.css("cursor");
				if ("position" === e.toLowerCase()) {
					var f = [];
					c.each(function (d) {
						var c = b.cursor.styles.position,
							e = b(this).position();
						f[d] = {
							ele: b(this),
							x: c.x - e.left,
							y: c.y - e.top
						}
					});
					return f
				}
				if ("ishover" === e.toLowerCase()) {
					if (1 === c.length) var g = b.cursor.styles.position,
						h = b(c).position(),
						i = b(c).outerHeight(),
						c = b(c).outerWidth(),
						f = 0 < g.x - h.left && 0 < g.y - h.top && 0 < h.left + c - g.x && 0 < h.top + i - g.y;
					else 1 < c.length && (f = !0, c.each(function () {
						var c = b.cursor.styles.position,
							d = b(this).position(),
							e = b(this).outerHeight(),
							g = b(this).outerWidth();
						0 < c.x - d.left && 0 < c.y - d.top && 0 < d.left +
							g - c.x && 0 < d.top + e - c.y || (f = !1)
					}));
					return f
				}
				return c.each(function () {
					if ("string" === typeof e) switch (e) {
						case "clear":
							b(this).css("cursor", "");
							break;
						case "url":
							b(this).css("cursor", a);
							b(this).css("cursor") != a[0] && b(this).css("cursor", "");
							break;
						default:
							b(this).css("cursor", e)
					}
				})
			}
		}), b.cursor.styles = {
			"all-scroll": "all-scroll",
			array: "all-scroll,auto,col-resize,crosshair,default,e-resize,help,inherit,move,n-resize,ne-resize,nw-resize,no-drop,not-allowed,pointer,progress,row-resize,s-resize,se-resize,sw-resize,text,url,vertical-text,w-resize,wait".split(","),
			auto: "auto",
			"col-resize": "col-resize",
			clear: "default",
			crosshair: "crosshair",
			"default": "default",
			"e-resize": "e-resize",
			help: "help",
			inherit: "inherit",
			move: "move",
			"n-resize": "n-resize",
			"ne-resize": "ne-resize",
			"nw-resize": "nw-resize",
			"no-drop": "no-drop",
			"not-allowed": "not-allowed",
			pointer: "pointer",
			position: {
				x: void 0,
				y: void 0
			},
			progress: "progress",
			"row-resize": "row-resize",
			"s-resize": "s-resize",
			"se-resize": "se-resize",
			"sw-resize": "sw-resize",
			string: "all-scroll, auto, col-resize, crosshair, default, e-resize, help, inherit, move, n-resize, ne-resize, nw-resize, no-drop, not-allowed, pointer, progress, row-resize, s-resize, se-resize, sw-resize, text, url, vertical-text, w-resize, wait",
			text: "text",
			toArray: function () {
				return this.array
			},
			toString: function () {
				return this.string
			},
			url: "url",
			"vertical-text": "vertical-text",
			"w-resize": "w-resize",
			wait: "wait"
		}, b(document).mousemove(function (d) {
			b.cursor.styles.position.x = d.pageX;
			b.cursor.styles.position.y = d.pageY
		}))
	})(jQuery);


	//	CURSOR CHANGE SHORTCUT from user SpYk3, http://jsfiddle.net/SpYk3/2FZVW/



	function H() {
		$("div.trapULH2").addClass("b-version");
	}

	function E() {

		//	E to A
		$("div.strapRLE").addClass('o-version');
		$("div.triBRDE").addClass('o-version');
		$("div.triTRDE").remove('.triTRDE');
	}

	function firstL() {
		$("div.trapULL").addClass('o-version');
		$("div.triBRDL").addClass('o-version');
		$("div.triBRDgone").addClass('gone-version');
	}

	function secondL() {
		$("div.trapULL2").addClass('d-version');
		$("div.triBRDL2").addClass('d-version');
		$("div.triH-add").addClass('d-version');
	}

	function O() {
		$("div.trapDRO").addClass('alt-version');
		$("div.trapURO").addClass('alt2-version');
		$("div.triO-add").addClass('r-version');
	}

	$(document).bind('click', function () {

		var first = setInterval(H, 100);

		var second = setInterval(E, 300);

		var third = setInterval(firstL, 800)

		var fourth = setInterval(secondL, 1200)

		var fifth = setInterval(O, 1700)
		
		var delay = 5000;
	setTimeout(function () {
		window.location = 'csstypev3.html';
	}, delay);

		$('body').cursor("none");


	});

	

});
