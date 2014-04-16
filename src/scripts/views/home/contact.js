define([
	'backbone',
	'marionette',
	'hbs!templates/home/contact'
	], function(Backbone, Marionette, contactTemplate) {

		var ContactView = Backbone.Marionette.ItemView.extend({
			template: contactTemplate
		});

		return ContactView;
});