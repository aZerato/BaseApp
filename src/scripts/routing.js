define([
		'backbone',
		'marionette'
	], function(Backbone, Marionette) {
		
		var Routing = Backbone.Marionette.AppRouter.extend({
			AppRoutes: {
				"" : "home",
				"contact" : "contact"
			}
		});

		return Routing;
});