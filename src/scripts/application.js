define([
	'backbone',
	'marionette',
	'routing',
	'handlebars',
	'controllers/HomeController',
	'views/shared/mainmenu'
	], function (Backbone, Marionette, Routing, Handlebars, HomeController, MainMenuView) {

		/*
		* Application
		*/
		var Application = new Marionette.Application();

		Application.addRegions({
			navigation: '#navigation',
			mainRegion: '#mainRegion'
		});

		Application.addInitializer(function(options) {
			var routing = new Routing({
				controller: new HomeController({App: Application})
			});

			Backbone.history.start({
				pushState: false,
				root: '/',
				silent: true
			});
			Backbone.history.loadUrl();
		});

		/*
		 * Navigation Menu
		 */
		Application.navigation.show(new MainMenuView());

		return Application;
});