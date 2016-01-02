var gameStartSkin=(function (_super) {
	__extends(gameStartSkin, _super);
	function gameStartSkin() {
		_super.call(this);
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this.bg_i(),this.roadblock_i(),this.hero_i(),this.carlight_i()];
	}
	var _proto = gameStartSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 800;
		t.source = "bg_png";
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.roadblock_i = function () {
		var t = new eui.Image();
		this.roadblock = t;
		t.source = "startLine_png";
		t.x = 80;
		t.y = 416;
		return t;
	};
	_proto.hero_i = function () {
		var t = new eui.Image();
		this.hero = t;
		t.source = "hero_png";
		t.x = 287;
		t.y = 488;
		return t;
	};
	_proto.carlight_i = function () {
		var t = new eui.Image();
		this.carlight = t;
		t.source = "carLight_png";
		t.x = 281;
		t.y = 450;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["bg","roadblock","hero","carlight"];
		},
		enumerable: true,
		configurable: true
	});
	return gameStartSkin;
})(eui.Skin);