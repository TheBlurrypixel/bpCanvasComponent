{
	"category": "CATEGORY_BLURRYPIXEL",
	"components": [{
		"className": "blurrypixel.Canvas",
		"displayName": "DISP_NAME_IMAGE",
		"version": "1.0",
		"source": "src/blurrypixelCanvas.js",
		"icon": "assets/SP_Image_Sm",
		"dimensions": [400, 300],
		"dependencies": [
			{"src": "../lib/jquery-3.4.1.min.js", "cdn": "https://code.jquery.com/jquery-3.4.1.min.js"},
			{"src": "../sdk/anwidget.js"}
		],
		"properties": [
			{"name": "PROP_CLASS", "variable": "class", "type": "String", "default": "blurrypixelCanvas"},
			{"name": "PROP_VISIBLE", "variable": "visible", "type": "Boolean", "default": "true"}
		]
	}]
}
