define([
	'backbone',
	'marionette',
	'views/home/home',
	'views/home/about',
	'views/home/contact',
	'middleware/menuMw'
	], function (Backbone, Marionette, HomeView, AboutView, ContactView, MenuMw) {

		var HomeController = Backbone.Marionette.Controller.extend({
			initialize: function(options) {
				this.App = options.App;
			},

			home: function() {
				MenuMw(this.App);
				this.App.mainRegion.show(new HomeView());
			},

			about: function() {
				MenuMw(this.App);
				this.App.mainRegion.show(new AboutView());
			},

			contact: function() {
				MenuMw(this.App);
				this.App.mainRegion.show(new ContactView());
			}
		});

		return HomeController;
});