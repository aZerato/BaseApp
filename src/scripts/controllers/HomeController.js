define([
	'backbone',
	'marionette',
	'views/home/home',
	'views/home/contact',
	'middleware/menuMw'
	], function (Backbone, Marionette, HomeView, ContactView, MenuMw) {

		var HomeController = Backbone.Marionette.Controller.extend({
			initialize: function(options) {
				this.App = options.App;
			},

			home: function() {
				MenuMw(this.App);
				this.App.mainRegion.show(new HomeView());
			},

			contact: function() {
				MenuMw(this.App);
				this.App.mainRegion.show(new ContactView());
			}
		});

		return HomeController;
});