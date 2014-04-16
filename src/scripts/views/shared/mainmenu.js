define([
	'backbone',
	'marionette',
	'hbs!templates/shared/mainmenu'
	], function(Backbone, Marionette, mainmenuTemplate) {

		var MainMenuView = Backbone.Marionette.ItemView.extend({
			template: mainmenuTemplate,

			ui:{
				menuitem: 'li'
			},

			events: {
				'click @ui.menuitem': 'highlight'
			},

			highlight: function(el) {
				$(this.ui.menuitem).removeClass('active');
				$(el.currentTarget).addClass('active');
			}
		});

		return MainMenuView;
});