define([
	'backbone',
	'marionette',
	'views/home/home'
	], function (Backbone, Marionette, HomeView) {

		var controller = Backbone.Marionette.Controller.extend({
			initialize: function (options) {
				this.App = options.App;
			},

			home: function() {

			}
		});

		return controller;
});