define([
	'backbone',
	'marionette',
	'views/shared/itemmenu',
	'hbs!templates/shared/mainmenu',
	'views/account/signin',
	'helpers/shared/modalhelper'
	], function(Backbone, Marionette, ItemMenuView, mainmenuTemplate, SigninView, ModalHelper) {

		var MainMenuView = Backbone.Marionette.CompositeView.extend({
			template: mainmenuTemplate,
			itemView: ItemMenuView,
			itemViewContainer: 'ul.nav',

			collectionEvents: {
				'change' : 'render'
			},
			
			events: {
				'click .glyphicon-cog' : 'signin'
			},

			signin: function() {
				var signinView = new SigninView();
				ModalHelper(signinView.render().$el);
			}
		});

		return MainMenuView;
});