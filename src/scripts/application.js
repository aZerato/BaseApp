define([
	'backbone',
	'marionette',
	'routing',
	'handlebars',
	'hbs!templates/shared/mainmenu',
	'controllers/HomeController'
	], function (Backbone, Marionette, Routing, Handlebars, mainmenuTpl, HomeController) {

		/*
		* Application
		*/
		var Application = new Backbone.Marionette.Application();

		var Layout = new Backbone.Marionette.Layout.extend({
			region: {
				mainmenu: {
					template: mainmenuTpl
				}
			}
		});

		Application.addInitializer(function(options) {
			var routing = new Routing({
				HomeController: new HomeController(Application)
			});

			Backbone.history.start({
				pushState: false,
				root: '/',
				silent: true
			});
			Backbone.history.loadUrl();
		});

		return Application;
});