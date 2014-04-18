define([
	'views/shared/mainmenu',
	'models/shared/ItemMenu',
	'collections/shared/collectionitemmenu'
	], function(MainMenuView, ItemMenu, CollectionItemsMenu) {
		
		var NavigationMenu = function(Application) {

			var item1 = new ItemMenu({path: "", name: "Home"});
			var item2 = new ItemMenu({path: "contact", name: "Contact"});

			var Collection = new CollectionItemsMenu([
				item1,
				item2
			]);

			Application.navigation.show(new MainMenuView({
				collection: Collection
			}));
		};

		return NavigationMenu;
});