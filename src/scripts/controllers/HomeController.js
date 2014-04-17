define([
	'backbone',
	'marionette',
	'views/home/home',
	'views/home/contact',
	'views/shared/mainmenu'
	], function (Backbone, Marionette, HomeView, ContactView, MainMenuView) {

		var HomeController = Backbone.Marionette.Controller.extend({
			initialize: function(options) {
				this.App = options.App;
			},

			home: function() {
				this.App.mainRegion.show(new HomeView());
			},

			contact: function() {
				this.App.mainRegion.show(new ContactView());
			},

			mainmenu: function() {
				this.App.navigation.show(new MainMenuView());
			}
		});

		return HomeController;
});