define([
	'backbone',
	'marionette',
	'hbs!templates/home/home'
	], function(Backbone, Marionette, homeTemplate) {

		var HomeView = Backbone.Marionette.ItemView.extend({
			template: homeTemplate
		});

		return HomeView;
});