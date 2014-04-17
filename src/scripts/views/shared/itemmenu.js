define([
	'backbone',
	'marionette',
	'models/shared/ItemMenu',
	'hbs!templates/shared/itemmenu'
	], function(Backbone, Marionette, ItemMenu, itemmenuTemplate) {

		var ItemMenuView = Backbone.Marionette.ItemView.extend({
			tagName: 'li',
			template: itemmenuTemplate,
			onRender: function() {
				this.setElement(this.$el.children().unwrap());
			}
		});

		return ItemMenuView;
});