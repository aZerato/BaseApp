define([
	'backbone',
	'models/shared/ItemMenu',
	], function(Backbone, ItemMenu) {
		
		var CollectionItemMenu = Backbone.Collection.extend({
			model: ItemMenu
		});

		return CollectionItemMenu;
});