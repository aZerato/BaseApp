define([
		'backbone',
		'marionette'
	], function(Backbone, Marionette) {
		
		var Routing = Backbone.Marionette.AppRouter.extend({
			appRoutes: {
				"" : "home",
				"about": "about",
				"contact": "contact"
			}
		});

		return Routing;
});