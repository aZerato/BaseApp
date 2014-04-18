define([
	'backbone',
	'marionette',
	'hbs!templates/home/about'
	], function(Backbone, Marionette, aboutTemplate) {

		var AboutView = Backbone.Marionette.ItemView.extend({
			template: aboutTemplate
		});

		return AboutView;
});