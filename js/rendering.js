var device_scale = window.devicePixelRatio;
var renderer;

function setup_rendering() {

	var width = 640, height = 480;
	renderer = PIXI.autoDetectRenderer(width, height,
		{transparent: true, resolution: window.devicePixelRatio});

	gameplay_stage = new PIXI.Container();

	// add the renderer view element to the DOM
	document.body.appendChild(renderer.view);

}


var box_thickness = 4;

// render the current frame
function render() {

	switch (scene.scene_state) {
		case "loading":

		case "gameplay":
			box.render();
			heart.render();
			renderer.render(gameplay_stage);
			break;
		default:
			break;
	}


}
