define([
	'backbone',
	'marionette',
	'views/shared/itemmenu',
	'hbs!templates/shared/mainmenu'
	], function(Backbone, Marionette, ItemMenuView, mainmenuTemplate) {

		var MainMenuView = Backbone.Marionette.CompositeView.extend({
			template: mainmenuTemplate,
			itemView: ItemMenuView,
			itemViewContainer: 'ul.nav',
			collectionEvents: {
				'change' : 'render'
			}
		});

		return MainMenuView;
});