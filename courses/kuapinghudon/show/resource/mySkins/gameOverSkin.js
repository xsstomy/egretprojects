var gameOverSkin=(function (_super) {
	__extends(gameOverSkin, _super);
	function gameOverSkin() {
		_super.call(this);
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this.resultGroup_i()];
	}
	var _proto = gameOverSkin.prototype;

	_proto.resultGroup_i = function () {
		var t = new eui.Group();
		this.resultGroup = t;
		t.height = 495;
		t.width = 449;
		t.x = 16;
		t.y = 97;
		t.elementsContent = [this._Image1_i(),this.result_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "noticeBg_png";
		t.top = 0;
		return t;
	};
	_proto.result_i = function () {
		var t = new eui.Image();
		this.result = t;
		t.horizontalCenter = 0;
		t.source = "succeededNotice_png";
		t.y = 178;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["result","resultGroup"];
		},
		enumerable: true,
		configurable: true
	});
	return gameOverSkin;
})(eui.Skin);