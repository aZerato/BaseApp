define([
	'backbone',
	'marionette',
	'models/shared/ItemMenu',
	'collections/shared/collectionitemmenu',
	'views/shared/itemmenu',
	'hbs!templates/shared/mainmenu'
	], function(Backbone, Marionette, ItemMenu, CollectionItemsMenu, ItemMenuView, mainmenuTemplate) {

		var item1 = new ItemMenu({active: "active", path: "", name: "Home"});
		var item2 = new ItemMenu({active: "", path: "contact", name: "Contact"});

		var Collection = new CollectionItemsMenu([
			item1,
			item2
		]);

		var MainMenuView = Backbone.Marionette.CompositeView.extend({
			template: mainmenuTemplate,
			itemView: ItemMenuView,
			itemViewContainer: 'ul.nav',
			collection: Collection
		});

		return MainMenuView;
});