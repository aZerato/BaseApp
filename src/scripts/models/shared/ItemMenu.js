define([
	'backbone',
	], function(Backbone) {
		
		var ItemMenu = Backbone.Model.extend({
			defaults: {
				active: "",
				path: "",
				name: ""
			}
		});

		return ItemMenu;
});