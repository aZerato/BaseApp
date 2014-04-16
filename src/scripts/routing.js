define([
		'backbone',
		'marionette'
	], function(Backbone, Marionette) {
		
		var Routing = Backbone.Marionette.AppRouter.extend({
			appRoutes: {
				"" : "home",
				"contact": "contact"
			}
		});

		return Routing;
});