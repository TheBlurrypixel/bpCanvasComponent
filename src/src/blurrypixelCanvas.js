(function($) {

	// Register a component with the className: my.Image,
	// and prototype with the following overrides
	// getCreateOptions
	// getCreateString
	// getProperties
	// getAttributes
    $.anwidget("blurrypixel.Canvas", {
        options: {
          left: 0,
          top: 0,
          width: 400,
          height: 300,
          visible: true,
          position: 'absolute'
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform"],
		_attrs: ["id", "class", "visible"],
		// Return a unique ID with the prefix image
		// _widgetID is a global declared in anwidget
		// This id is used only if the user has not set any instance ID for the component in Animate CC
		// Otherwise the user configured name is used
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "canvas" + _widgetID++ });
		},
		// Return the string for creating the DOM element
		// For image we just need to create the <img> tag
		getCreateString: function() {
			return "<div><canvas/></div>";
		},
		// Set of configurable properties
		getProperties: function() {
			return this._props;
		},
    attach: function() {
			if(this._attached)
				return;

			this._superApply(arguments);
			this._$div = $(this._element);
			this._$this = this._$div.find('canvas');

			this.update(true);
		},
		detach: function() {
			if(!this._$div)
				return;

			this._$div.remove();
			this._attached = false;
			this._$div = null;
			$(parent).trigger("detached", this.getEventData("detached"));
		},
		// Set of configurable attributes
		getAttributes: function() {
			return this._attrs;
		},
    applyAttributes: function($el, force) {
      this._superApply(arguments);
      if(force || this._dirty['id']) {
        this._dirty['id'] = false;

        // check if id is already taken by stage
        while(this._options['id'] == stage.canvas.id) this._options['id'] += "_";
        $el.prop('id', this._options['id']);
      }
		},
    update: function(force) {
			if(!this._$div)
				return;

			var updateSize = force || this._dirty["width"] || this._dirty["height"];
      this.applyProperties(this._$div, force);
			this.applyAttributes(this._$this, force);

			if(updateSize) {
				// Copy the width and height from parent
				this._$this.css("width", this._$div.css("width"));
				this._$this.css("height", this._$div.css("height"));
			}
		}
	});
})(jQuery);
