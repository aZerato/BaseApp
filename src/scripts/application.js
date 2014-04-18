define([
	'backbone',
	'marionette',
	'routing',
	'handlebars',
	'helpers/shared/menuhelper',
	'controllers/HomeController'
	], function (Backbone, Marionette, Routing, Handlebars, MenuHelper, HomeController) {

		/*
		* Application
		*/
		var Application = new Marionette.Application();

		Application.addRegions({
			navigation: '#navigation',
			mainRegion: '#mainRegion'
		});

		Application.addInitializer(function(options) {
			/*
			 *	Generate Menu
			 */
			new MenuHelper(Application);
			
			/*
			 *	Routing
			 */
			var routing = new Routing({
				controller: new HomeController({App: Application})
			});

			/*
			 *	Backbone App basic configuration
			 */
			Backbone.history.start({
				pushState: false,
				root: '/',
				silent: true
			});
			Backbone.history.loadUrl();
		});

		return Application;
});