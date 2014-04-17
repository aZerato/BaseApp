define([
	'backbone',
	'marionette',
	'routing',
	'handlebars',
	'controllers/HomeController',
	'views/shared/mainmenu',
		'models/shared/ItemMenu',
	'collections/shared/collectionitemmenu',
	], function (Backbone, Marionette, Routing, Handlebars, HomeController, MainMenuView, ItemMenu, CollectionItemsMenu) {

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
		var item1 = new ItemMenu({active: "", path: "", name: "Home"});
		var item2 = new ItemMenu({active: "", path: "contact", name: "Contact"});

		var Collection = new CollectionItemsMenu([
			item1,
			item2
		]);

		Application.navigation.show(new MainMenuView({
			collection: Collection
		}));

		return Application;
});