define([
	'backbone'
	], function(backbone) {

		var MenuMw = function(App) {
			var collection = App.navigation.currentView.collection;
			var curPath = Backbone.history.location.hash.substring(2);
			_.each(collection.models, function(curItem) {
				if(curPath === curItem.attributes.path) {
					curItem.set({active : "active"});
				} else {
					curItem.set({active: ""});
				}
			});
		};

		return MenuMw;
});